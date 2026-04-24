//métodos
//Limpeza e validação

const email = "          email@empresa.com ";
const emaillimpo= email.trim();//remove espaços extras 
console.log(emaillimpo)

//includes - verifica se o dominio é valido
if(emaillimpo.includes("@")){
    console.log("email valido")
}else{
    console.log("email invalido")
}

//transformação de texto

const titulolivro ="Como Aprender a Programar"

const texto=titulolivro
.toLowerCase()// deixa o texto minusculo
.split(" ")//remove parte do texto
.join("_")//criar uma unica string e texto

console.log(texto)

//to fixed
const precoProdouto= 199.99;
const desconto = 0.15; //15%
const precofinal= precoProdouto * (1 - desconto);
console.log(precofinal)
console.log(`R$ ${precofinal.toFixed(2)}`);

//metodos de Array

const produtos =[
    {nome:"Teclado Mecanico",preco:200,promoçao:true},
    {nome:"Mouse Gamer",preco:300,promoçao:false},
    {nome:"Monitor Gamer",preco:900,promoçao:true},
    {nome:"Pad Mouse",preco:70,promoçao:false},
]
console.log(produtos)