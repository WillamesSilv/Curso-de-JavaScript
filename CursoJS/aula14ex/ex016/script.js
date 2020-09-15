let botao = document.getElementById('contagem')
botao.addEventListener('click', clicar)

function clicar() {
  let valueInicio = document.getElementById('inicio')
  let valueFim = document.getElementById('fim')
  let valuePasso = document.getElementById('passo')
  let res = document.getElementById('res')

  if (valueInicio.value.length == 0 || valueFim.value.length == 0 || valuePasso.value.length == 0){
    alert('ERRO dados incompletos')
    res.innerHTML = 'Impossível contar'
  } else {
      res.innerHTML = "Contando: <br>" 
      let inicio = Number(valueInicio.value)
      let fim = Number(valueFim.value)
      let passo = Number(valuePasso.value)
      if (passo <= 0){
        alert('Passo inválido, considerando passo 1')
        passo = 1
      }
      if (inicio < fim) {
        for (let c = inicio; c <= fim; c += passo) {
          res.innerHTML += `${c} \u{1F449}`
        }
      } else {
          for (let c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} \u{1F449}`
        }
      }
      res.innerHTML += `\u{1F3C1}`

  }

  
}