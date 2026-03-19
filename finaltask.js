let products = []
let filtered = []
let cart = []

const productBox = document.getElementById("products")
const cartItems = document.getElementById("cartItems")
const total = document.getElementById("total")
const count = document.getElementById("count")

// FETCH
fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
document.getElementById("loading").style.display="none"
products=data
filtered=data
showProducts(data)
})
.catch(()=>{
document.getElementById("error").innerText="Error loading products"
})

// DISPLAY
function showProducts(data){
productBox.innerHTML=""

data.forEach(p=>{
let div=document.createElement("div")
div.className="card"

div.innerHTML=`
<img src="${p.image}">
<h4>${p.title.substring(0,50)}</h4>
<p>$${p.price}</p>
<button onclick="addCart(${p.id})">Add</button>
`

productBox.appendChild(div)
})
}

// SEARCH
document.getElementById("search").addEventListener("input",e=>{
let val=e.target.value.toLowerCase()

filtered=products.filter(p=>
p.title.toLowerCase().includes(val) ||
p.category.toLowerCase().includes(val)
)

showProducts(filtered)
})

// CATEGORY
document.getElementById("category").addEventListener("change",e=>{
let val=e.target.value

filtered = val==="all" ? products : products.filter(p=>p.category===val)

showProducts(filtered)
})

// SORT
function sortLow(){
filtered.sort((a,b)=>a.price-b.price)
showProducts(filtered)
}

function sortHigh(){
filtered.sort((a,b)=>b.price-a.price)
showProducts(filtered)
}

// CART
function addCart(id){
let item=cart.find(p=>p.id===id)
let product=products.find(p=>p.id===id)

if(item){
item.qty++
}else{
cart.push({...product,qty:1})
}

updateCart()
}

// UPDATE CART
function updateCart(){
cartItems.innerHTML=""

cart.forEach(item=>{
let div=document.createElement("div")
div.className="cartItem"

div.innerHTML=`
<span>${item.title.substring(0,15)} x${item.qty}</span>
<span>$${(item.price*item.qty).toFixed(2)}</span>
<button class="remove" onclick="remove(${item.id})">X</button>
`

cartItems.appendChild(div)
})

count.innerText=cart.length

let totalPrice=cart.reduce((sum,i)=>sum+i.price*i.qty,0)
total.innerText=totalPrice.toFixed(2)
}

// REMOVE
function remove(id){
cart=cart.filter(i=>i.id!==id)
updateCart()
}

// TOGGLE CART
function toggleCart(){
document.getElementById("cartPanel").classList.toggle("active")
}