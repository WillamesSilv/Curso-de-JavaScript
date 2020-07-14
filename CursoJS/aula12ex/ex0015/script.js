function verificar() {
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO!!] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//criando o elemento no HTML
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-menino.png')
            }else if (idade <21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else {
            genero ='Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crianca-menina.png')
            }else if (idade <21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adicionando o elemento para aparecer
    }
}