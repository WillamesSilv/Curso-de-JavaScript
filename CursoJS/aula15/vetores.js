let num = [5, 2, 19, 7]
num[4] = 10 // Adiciona mais um valor no vetor no indice 4
num.push(24) // Adiciona mais um valor no último indice
num.sort(function(a,b){return a-b})// O método sort() organiza de forma alfabética tratando com string, por isso adicionei a function

/*
for (let pos = 0; pos < num.length; pos++){
  console.log(`A posição ${pos} tem o valor ${num[pos]}` )
}
*/

for (let pos in num) { // Essa formatação do for so serve para array e objeto
  console.log(`A posição ${pos} tem o valor ${num[pos]}` )
}
