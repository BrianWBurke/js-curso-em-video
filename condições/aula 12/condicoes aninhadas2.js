var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`agora são exatamente ${hora}:${min}.`)

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24) {
    console.log('boa noite!')
} else if (hora > 23) {
    console.log('horario inválido')
} else {
    console.log('Boa madrugada!')
}
