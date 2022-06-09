let numa = [];


function adicionar() {
    let numero = document.getElementById('txtn');
    let numerot = document.getElementById('numadc');
    let n = Number(numero.value);
    let pos = numa.indexOf(n);

    if (n == '' || n < 1 || n > 100 || pos != -1) {
        alert('Número invalido ou já encontrado na lista! Por favor digite um número de 1 a 100.')
    } else {
        let item = document.createElement('option');

        numa.push(n);
        item.text = `Valor ${n} adicionado.`;
        item.value = `v${n}`;
        numerot.appendChild(item);

        console.log(numa);

        res.innerHTML = '';
    }

    numero.value = '';
    numero.focus();

}

function finalizar() {  
    
    numa.sort();  
    

    if (numa == "") {
        alert('Não foi adicionado nenhum número! Por favor adicione números de 1 a 100 na caixa acima.');
    } else {
                
        let tam = numa.length;
        let som = 0;
        let maior = numa[0];
        let menor = numa[0];
        let media = 0
        

        for (let pos in numa) {
            som += numa[pos];
            if(numa[pos] > maior);
                maior = numa[pos];
            if (numa[pos] < menor);  
                menor = numa[pos];       
        }    
                      
        
        
    res.innerHTML = `<p>Ao todo temos ${tam} números</p> <p>O maior valor informado foi ${numa[tam-1]}</p> <p>O menor valor informado foi ${numa[0]}</p> <p>Somando todos os valores, temos ${som}</p> <p>A media dos valores digitados é ${som/tam}</p>`;
}

}

