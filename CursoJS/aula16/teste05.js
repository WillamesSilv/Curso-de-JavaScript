// RECURSIVIDADE
function fatorial (n){
    if (n == 1) {
        return 1
    }else{
        return n*fatorial(n-1) // Chamanado a função pra ela mesma
    }

}

console.log(fatorial(10))