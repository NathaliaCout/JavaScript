function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    //var minu = 7
    //var hora = 7
    minu = minu.toString().padStart(2,'0')    

    msg.innerHTML = `Agora são ${hora} horas e ${minu} minutos.`

    if (hora >=0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#fde8c9'

    } else if (hora >=12 && hora <= 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#b47d6b'
    }else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#172e49'
    }

}

