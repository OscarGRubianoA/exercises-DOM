let url = new URLSearchParams(location.search)
let id = url.get('id')
let main_detail= document.getElementById('main_detail');
let fruta_detail = (array,key) => array.find(element => element.id==key)
console.log(fruta_detail(frutas,id))
 function createDetail(array){
    return `<div
    class="w-56 p-5 border-solid border-2 border-black"
    >
    <img
      src=${array.foto}
      alt="foto-frutas"
    />
    <p><b>Nombre: </b>${array.nombre}</p>
    <p><b>Precio: </b>${array.precio}</p>
    <p>
      <b>Descripcion: </b> ${array.descripcion}
    </p>
    <a href="./detail.html?id=${id}">Ver mas</a>
   </div>`
}
main_detail.innerHTML= createDetail(fruta_detail(frutas,id))
/*
function createCardDetails(array,container){
container.innerHTML = array.map(createDetail)
}
createCardDetails(frutas,main_detail) */