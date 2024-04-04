let container = document.getElementById("container_top");
function createCard(array) {
 return `<div
 class="w-56 p-5 border-solid border-2 border-black"
 >
 <img
   src=${array.foto}
   alt="foto-frutas"
 />
 <p><b>Nombre: </b> ${array.nombre}</p>
 <p><b>Precio:</b>${array.precio}</p>
 <p>
   <b>Descripcion:</b> ${array.descripcion}
 </p>
</div>`;
}
/* console.log(createCard(frutas[0])) */
/* container.innerHTML+=createCard(frutas) */
function renderizarCards(array,contenedor){
    contenedor.innerHTML = array.map(createCard)
}
renderizarCards(frutas,container)

/* document.addEventListener("DOMContentLoaded", function () {
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
  }); */