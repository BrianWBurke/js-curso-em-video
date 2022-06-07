function contar() {

    var num1 = document.getElementById('txtnum1')
    var num2 = document.getElementById('txtnum2')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')


    if (Number(num1.value) || Number(num2.value) == '') {
        res.innerHTML = `Impossivel contar!`

    }else if (Number(passo.value) == 0){
        alert('Passo inválido! considerando passo: 1.')

        res.innerHTML = `Contando:   `
        
        while (Number(num1.value) <= Number(num2.value)) {
            res.innerHTML += `> ${num1.value}`

            num1.value++            
    }
        

    } else {
            res.innerHTML = `Contando:   `

            while (Number(num1.value) <= Number(num2.value)) {
                res.innerHTML += `> ${num1.value}`

                num1.value++            
        }
    }



}