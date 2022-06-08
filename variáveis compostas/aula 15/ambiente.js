let num = [5, 8, 2, 9, 3];

console.log(num); //mostra o array completo
console.log(`O terceiro valor do vetor é ${num[2]}`); //mostra somente o array na posição x
console.log(`Nosso vetor é o ${num}`); //mostra os conteúdos do  array
console.log(`O vetor tem ${num.length} posições`); // mostra o tamanho do array

num.push(1) //adicionando elemento ao final
console.log(num);

num.sort(); //deixa em ordem crescente
console.log(`Em ordem crescente: ${num}`);

//o pos volta -1 caso o valor não existir
let pos = num.indexOf(4);
if (pos == -1 ){
console.log(`O valor não foi encontrado!`);
} else {
pos = num.indexOf(4);
console.log(`O valor está na posição ${pos}`);
}


