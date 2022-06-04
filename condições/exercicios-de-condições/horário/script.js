function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var ola = document.getElementById('oi')
    var data = new Date()
    var hora = 0//data.getHours()
    var min = 0//data.getMinutes() 

    
    switch(hora) {
        case 0:
        hora = "00"
        break
    case 1:
        hora = "01"
        break
    case 2:
        hora = "02"
        break
    case 3:
        hora = "03"
        break
    case 4:
        hora = "04"
        break
    case 5:
        hora = "05"
        break
    case 6:
        hora = "06"
        break
    case 7:
        hora = "07"
        break    
    case 8:
        hora = "08"
        break
    case 9:
        hora = "09"
        break

}

switch(min) {
    case 0:
    min = "00"
    break
case 1:
    min = "01"
    break
case 2:
    min = "02"
    break
case 3:
    min = "03"
    break
case 4:
    min = "04"
    break
case 5:
    min = "05"
    break
case 6:
    min = "06"
    break
case 7:
    min = "07"
    break    
case 8:
    min = "08"
    break
case 9:
    min = "09"
    break

}

    msg.innerHTML = `Agora são ${hora}:${min}.`

    if (hora >= 6 && hora < 12){
        // BOMDIA!
        img.src = 'manhã.jpg'
        oi.innerHTML = 'Bom dia!!'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18){
        //BOATARDE!
        img.src = 'tarde.jpg'
        oi.innerHTML = 'Boa tarde!!'
        document.body.style.background = '#b9846f'  

    } else if (hora >= 18 && hora < 24) {
        //BOA NOITE!
        img.src = 'noite.jpg'
        oi.innerHTML = 'Boa Noite!!'
        document.body.style.background = '#515154' 
        
        

    } else {
    //BOA NOITE!
        img.src = 'noite.jpg'
        oi.innerHTML = 'Boa madrugada!!'
        document.body.style.background = '#515154'
}
}