/*let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio: ');
let soma = 0;
 let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero: '));
    soma+=numero;
    contador--;
}

let promedio = soma / qtdNumeros;

console.log(promedio); 
console.log("hola")
let numeros = [3,30,34,5,9]
let aux = numeros.join("")
console.log(aux)
let order=numeros.sort((a,b)=>a-b)
console.log(order)

function moreGreat(array){
    for(let i = 0; i<array.length;i++){

    }
   let str = []
   let str3 = []
  
   
   
  
    let str2=array[i]
    if(str2<array[i+1]){
     console.log(str)
     
    
   }else{
    str.push(str2)
   }
  console.log(str)
}  
}
moreGreat(numeros)*/
function generarCombinaciones(array) {
    const combinaciones = [];
  
    function backtracking(combinacionActual, elementosRestantes) {
      if (elementosRestantes.length === 0) {
        combinaciones.push(combinacionActual.join(''));
        return;
      }
  
      for (let i = 0; i < elementosRestantes.length; i++) {
        const nuevoElemento = elementosRestantes[i];
        const nuevosElementosRestantes = elementosRestantes.slice(0, i).concat(elementosRestantes.slice(i + 1));
        backtracking(combinacionActual.concat(nuevoElemento), nuevosElementosRestantes);
      }
    }
  
    backtracking([], array);
    return combinaciones;
  }
  
  const numeros = [3, 30, 34, 5, 9];
  const todasLasCombinaciones = generarCombinaciones(numeros);
  console.log(todasLasCombinaciones)
  function majorCombination(array){
    let major = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] >major){
           major = array[i];
        }
    }
    console.log(major)
  }
  majorCombination(todasLasCombinaciones)