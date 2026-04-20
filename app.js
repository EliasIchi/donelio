let carrito=[];

const contenedor=document.getElementById('productos');

productos.forEach((p,i)=>{
contenedor.innerHTML+=`
<div class='producto'>
<h3>${p.nombre}</h3>
<p>$ ${p.precio}</p>
<button onclick='agregar(${i})'>Agregar</button>
</div>
`;
});

function agregar(i){
carrito.push(productos[i]);
renderCarrito();
}

function renderCarrito(){
let html='';
carrito.forEach(x=>{
html+=`<p>${x.nombre} - $${x.precio}</p>`
})

document.getElementById('cart').innerHTML=html;
}

function enviarWhatsapp(){
let texto='Hola quiero pedir:%0A';

carrito.forEach(x=>{
texto+=`${x.nombre} - $${x.precio}%0A`;
})

window.open(
'https://wa.me/5491170667389?text='+texto,
'_blank'
);
}