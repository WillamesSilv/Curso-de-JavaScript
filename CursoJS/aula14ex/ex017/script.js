function clicar(){
  let ntext = document.getElementById('number')
  let tab = document.getElementById('seltab')
  let num = Number(ntext.value)
  if (ntext.value.length == 0) {
    alert('Erro! Preencha o campo NÚMERO')
  }else {
    let c = 1
    tab.innerHTML=" "
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${num} x ${c} = ${num*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
    
  }
  

}


