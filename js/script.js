//Declarando uma lista de carros
carros = ["Ferrari", "Porsche","Lamborghini", "Mercedes", "Audi", "Volkswagen", "Fiat"];

//Declaraç~~ao simples com map
//const novaLista = carros.map(function(c, indice){
//    console.log(c)
//    return c;
//});

//console.log(novaLista);

//Retornando um array de objetos a partir de um array normal
const carrosObj = carros.map(function(c, indice){
        return {"id": indice, "nome": c};
});

console.log(carrosObj);

//Realizando uma filtragem no array de obj e retornando apenas os carros com a letra
//"M" o nome
//const carrosFiltrados = carrosObj.filter(function(c){
//    return c.nome.includes("M");
//});

//const carrosFiltrados = carrosObj.filter(c=> c.id % 2 == 0);

//console.log(carrosFiltrados);

//Utilizando o find para encontrar um determinado carro:
const carroEncontrado = carrosObj.find(c=> c.id % 2 == 1);
console.log(resultados);


