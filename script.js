

// Declarando uma lista de carros
// carros = ["Ferrari", "Porsche", "Lamborghini", "Mercedes", "Audi", "Volkswagen", "Fiat"];

// Declaração simples com MAP
// const novaLista = carros.map(function(carro, indice){
//     console.log(carro);
//     return carro
// });

// console.log(novaLista);


console.log('============================================');

// Retornando um array de objetos a partir de um array normal
// const carrosObj = carros.map(function(carro, indice){
//     return {"id": indice,"nome" : carro,}
// });

// console.log(carrosObj);

console.log('============================================');

// Realizando um filtragem no array de obj e retornando apenas os carros com a letra 
//"M" no nome

// const carrosFiltrados = carrosObj.filter(function(carro){
//     return carro.nome.includes('c');
// });

//const carrosFiltrados = carrosObj.filter(( c => c.id % 2 == 0));

//console.log(carrosFiltrados);

console.log('============================================');

// Utilizando o find para encontrar um determinado carro

// const resultados = carrosObj.find(c => c.id % 2 == 1);
// console.log(resultados);

console.log('============================================');

// Mesclando dois arrays de obj, um de veículos, outro de preços:

const carros = [{"id": 1,"nome" : "Ferrari"},
    {"id": 2,"nome" : "Porsche"},
    {"id": 3, "nome": "Lamborghini"},
    { "id": 4, "nome": "Mercedes" }
];
const precos = [
    { "id": 1, "preco": 100000 },
    { "id": 2, "preco": 200000 },
    { "id": 3, "preco": 300000 },
    { "id": 4, "preco": 400000 }
];

// Gerando um novo array com MAP de carrosPrecificados

// const carrosPrecificados = carros.map((c) => {
//     const preco = precos.find(p => p.id === c.id);
//     return {"id": c.id, "nome": c.nome, "preco": preco.preco}
// });

const carrosPrecificados = carros.map((c) => {
    const preco = precos.find(p => p.id === c.id);
    return {...c, "preco": preco.preco}
});

console.log(carrosPrecificados)