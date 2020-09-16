let num = [5, 2, 19, 7]
num[4] = 10 // Adiciona mais um valor no vetor no indice 4
num.push(24) // Adiciona mais um valor no último indice

console.log(`Nosso vetor é ${num}`)
console.log(`O terceiro elementodo do vetor é ${num[2]}`)
console.log(`A soma entre ${num[0]} + ${num[4]} é igual a ${num[0] + num[4]}`)
console.log(`O nosso vetor tem ${num.length} elementos`)
console.log(`Meus elementos organizados de maneira crescente são ${num.sort(function(a,b){return a-b})}`)
// O método sort() organiza de forma alfabética tratando com string, por isso adicionei a function

let pos = num.indexOf(19) // indexOf retorna a posição do valor, quanto não tem o valor informado no vetor, retorna -1
if (pos == -1){
  console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O elemento 19 está na posição ${pos}`)
}
