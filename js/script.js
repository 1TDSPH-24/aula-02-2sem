

//Declarando uma lista de carros
//   carros = ["Ferrari", "Porsche", "Lamborghini", "Mercedes", "Audi", "Volkswagen", "Fiat"];

// //Declaração simples com MAP
// const novaLista = carros.map( function(c,indice){
//     console.log(c)
//     return c;
// });

// console.log(novaLista);

//Retornando um array de objetos a partir de um array normal.
// const carrosObj = carros.map( function(c,indice){
//     return {"id":indice, "nome": c};
// });

// console.log(carrosObj);

//Realizando uma filtragem no array de obj e retornando apenas os carros com a letra
// "M" no nome.
// const carrosFiltrados = carrosObj.filter( function(c){
//     return c.nome.includes("A");
//     });

// const carrosFiltrados = carrosObj.filter(c=> c.id % 2 == 0);

// console.log(carrosFiltrados);

//Utilizando o find para encontrar um determinado carro:
// const resultados = carrosObj.find(c=> c.id % 2 == 1);
// console.log(resultados);

//Mesclando dois arrays de obj, um de veículos outro de preços:

const carros = [
    { "id": 1, "nome": "Ferrari" },
    { "id": 2, "nome": "Porsche" },
    { "id": 3, "nome": "Lamborghini" },
    { "id": 4, "nome": "Mercedes" }
];
const precos = [
    { "id": 1, "preco": 100000 },
    { "id": 2, "preco": 200000 },
    { "id": 3, "preco": 300000 },
    { "id": 4, "preco": 400000 }
];

//Gerando um novo array com map de carrosPrecificados:
//  const carrosPrecificados = carros.map((c,indice)=>
//     ({...c, preco: preços[indice].preco})
//  );

//  console.log(carrosPrecificados);

// const carrosPrecificados = carros.map((c)=>{
//     const preco = precos.find(p => p.id === c.id);
//     return {"id":c.id,"nome":c.nome,"preco":preco.preco}
// });

const carrosPrecificados = carros.map((c)=>{
    const preco = precos.find(p => p.id === c.id);
    return {...c,"preco":preco.preco}
});

console.log(carrosPrecificados);

let novoObj = {"id":1,"nome":"Ferrari","preco":100000};