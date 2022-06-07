function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
       // window.alert('[ERRO] Faltam dados!')        
    } else {
        res.innerHTML = `Contando: \u{25B6} \u{27A1}`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            //caso passo for <= 0
            window.alert('Passo inválido! Considernado PASSO: 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }            
        }
        res.innerHTML += `\u{23F9}`
    }
}