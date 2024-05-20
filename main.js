let container = document.getElementById("container_top");
let button = document.getElementById("button");
let contenedorCheckbox = document.getElementById("checkbox")

let search = document.getElementById("search") 
let contenedorCards = document.getElementById("contenedor_cards")
let button1 = document.getElementById("button1")
/* button.addEventListener("click", event =>console.log(event.target)) */

console.log(button1)
contador=0
button1.addEventListener("click", (event) => location.href="www.google.com")
 let frutasFiltradas = frutas.filter(fruta => fruta.colorPrincipal)
console.log(frutasFiltradas)
let coloresFrutas = Array.from(new Set(frutas.map(e => e.colorPrincipal))) 
console.log(coloresFrutas);
let crearCheckbox = nombreColor =>
`<label>${nombreColor}
<input type="checkbox" name="${nombreColor}" value="${nombreColor}">
</label>`
let checkboxColores = array => array.map(crearCheckbox).reduce((a,b) => a+b)
console.log(checkboxColores(coloresFrutas))
contenedorCheckbox.innerHTML = checkboxColores(coloresFrutas) 
let crearCardMini = fruta => `<div class="w-96 border border-solid h-48 flex justify-center">
<img  src = "${fruta.foto}" alt = "${fruta.nombre}" class = "w-32"/>
<p><b>Nombre:</b> ${fruta.nombre}</p>
<p><b>Precio:</b> ${fruta.precio}</p>
<p><b>Color:</b> ${fruta.colorPrincipal}</p>
</div>`
let crearCardsConFrutas = array => array.map(crearCardMini).reduce( (a,b) => a + b )
contenedorCards.innerHTML = crearCardsConFrutas(frutasFiltradas)
 console.log(crearCardsConFrutas(frutasFiltradas)) 
 contenedorCheckbox.addEventListener("change", e => {let checkChecked = Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`)).map(input => input.value)
console.log(checkChecked)

 contenedorCards.innerHTML = crearCardsConFrutas((frutasFiltradas.filter(fruta => checkChecked.includes(fruta.colorPrincipal))))
})
search.addEventListener("keyup", e  => {
  let nombreIngresado = e.target.value
  contenedorCards.innerHTML = crearCardsConFrutas((frutasFiltradas.filter(fruta => fruta.nombre.toLowerCase().includes(nombreIngresado.trim().toLowerCase())  )))
})  
 
/*  document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container_top");
  
    function createCard(fruta) {
      return `
        <div class="w-56 p-5 border-solid border-2 border-black">
          <img src="${fruta.foto}" alt="manzana" />
          <p><b>Nombre:</b> ${fruta.nombre}</p>
          <p><b>Precio:</b> ${fruta.precio}</p>
          <p><b>Descripción:</b> ${fruta.descripcion}</p>
        </div>
      `;
    }
  
    function renderizarCards(array, contenedor) {
      contenedor.innerHTML = array.map(createCard).join("");
    }
  
    renderizarCards(frutas, container);
  });  */
  fetch("https://moviestack.onrender.com/api/movies",{
    headers:{
      "X-API-key":"0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
  })
  .then(response=>response.json()).then(data=>console.log(data)/* ;createCards(movies,contenedorCards) */).catch(error=>console.log(error))
  console.log()
    function createCards(array,container){
    let div = document.createElement("div")
    div.className = `w32 h32 bg-red-400m-4`
    div.innerHTML = `<h1${array.title}${array.tagline}</h1>`
    container.appendChild(div)
  } 
  
  
  