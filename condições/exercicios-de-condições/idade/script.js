function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.querySelectorAll('input[type="radio"]')
        var idade = ano - Number(fano.value)     
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //colocando id="foto" do img de cima

        if (fsex[0].checked) {
            gênero = 'Homem'            
            if (idade >= 0 && idade < 10) {
                //criança  
                img.setAttribute('src', 'bebe-m.jpg') 
                document.body.style.background = `#FF665A`            
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
                document.body.style.background = `#705E78`
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
                document.body.style.background = `#FFF587`
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
                document.body.style.background = `#A3A1A8`
            }         
        } else if (fsex[1].checked) {
            gênero = 'Mulher'            
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-f.jpg')
                document.body.style.background = `#FF8C64`                
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-f.jpg') 
                document.body.style.background = `#812F33`
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'adulto-f.jpg') 
                document.body.style.background = `#A5AAA3`
            } else {
                //idosa
                img.setAttribute('src', 'idoso-f.jpg') 
                document.body.style.background = `#FEA443`
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}