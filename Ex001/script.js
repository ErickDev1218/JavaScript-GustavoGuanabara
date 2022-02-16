function carregar(){
    var hrs = document.getElementById('hrs')
    var img = document.getElementById('imagem')
    var mensagem = document.getElementById('msg')
    var data = new Date()
    var horas = data.getHours()
    hrs.innerHTML = `Agora são <strong>${horas} horas</strong>`

    if(horas >= 0 && horas < 12){
        //Bom dia
        img.src = 'imagens/manha2.png'
        document.body.style.background = '#f3dcc4'
        mensagem.innerHTML = '<strong>Bom dia!</strong>'
    }else if (horas >= 12 && horas < 18){
        //Boa tarde
        img.src = 'imagens/tarde2.png'
        document.body.style.background = '#80674a'
        mensagem.innerHTML = '<strong>Boa tarde!</strong>'
    }else{
        img.src = 'imagens/noite2.png'
        document.body.style.background = '#03505a'
        mensagem.innerHTML = '<strong>Boa noite!</strong>'
    }
}


