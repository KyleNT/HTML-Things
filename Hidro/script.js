function carregar() {
    var msg = document.getElementById('msg')
    var photu = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        photu.src = './img/1.png'
    } else if (hora >= 12 && hora < 18) {
        photu.src = './img/2.png'
    } else {
        photu.src = './img/3.png'
    }
}