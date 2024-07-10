let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
    contador--;
}

let promedio = soma / qtdNumeros;

console.log(promedio);