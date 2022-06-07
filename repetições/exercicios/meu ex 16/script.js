function contar() {

    let num1 = document.getElementById('txtnum1')
    let num2 = document.getElementById('txtnum2')
    let passo = document.getElementById('txtpasso')
    let res = document.querySelector('div#res')



    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar! Informar mais dados` 
        

    } else {
        let i = Number(num1.value)
        let f = Number(num2.value)
        let p = Number(passo.value)
        let c = i

       if (p <= 0) {
            alert('Passo inválido! considerando passo: 1.')
            p = 1
       }
        if (i < f)    {
        //contagem crescente
        res.innerHTML = `Contando: \u{25B6} \u{27A1}`

        while (c <= f) {
            res.innerHTML += ` ${c}  \u{27A1}`
            c += p
        }
    }  else {
        //contagem regressiva
        res.innerHTML = `Contando: \u{25B6} \u{27A1}`

        while (c >= f) {
            res.innerHTML += ` ${c}  \u{27A1}`
            c -= p
        }
    }

        res.innerHTML += `\u{23F9}`
    }





}