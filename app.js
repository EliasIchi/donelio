let carrito={};

function render(lista=productos){
let html='';
lista.forEach(p=>{
const qty=carrito[p.id]?.qty||0;
html+=`
<div class='producto'>
<h3>${p.nombre}</h3>
<small>${p.cat}</small>
<p>$${p.precio}</p>
<button onclick='menos(${p.id})'>-</button>
<span style='padding:10px'>${qty}</span>
<button onclick='mas(${p.id})'>+</button>
</div>`;
});
document.getElementById('productos').innerHTML=html;
}

function mas(id){
const p=productos.find(x=>x.id===id);
if(!carrito[id]) carrito[id]={...p,qty:0};
carrito[id].qty++;
render();
renderCart();
}

function menos(id){
if(!carrito[id]) return;
carrito[id].qty--;
if(carrito[id].qty<=0) delete carrito[id];
render();
renderCart();
}

function renderCart(){
let html='';
let total=0;
Object.values(carrito).forEach(i=>{
let sub=i.qty*i.precio;
total+=sub;
html+=`<p>${i.qty} x ${i.nombre} = $${sub}</p>`;
});
document.getElementById('cart').innerHTML=html||'Vacío';
document.getElementById('total').innerText=total;
}

function enviarWhatsapp(){
let txt='Hola Don Elio quiero pedir:%0A';
Object.values(carrito).forEach(i=>{
txt+=`${i.qty} x ${i.nombre} - $${i.qty*i.precio}%0A`;
});
txt+=`Total: $${document.getElementById('total').innerText}`;
window.open('https://wa.me/5491170667389?text='+txt,'_blank');
}

document.getElementById('buscar').addEventListener('input',e=>{
let t=e.target.value.toLowerCase();
render(productos.filter(p=>p.nombre.toLowerCase().includes(t)));
});

render();
