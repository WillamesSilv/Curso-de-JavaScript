function carregar () {
    const msg = document.getElementById('msg')
    const img = document.getElementById('foto')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#beac9e'

    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#f06101'

    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#0c1126'

    }

}


