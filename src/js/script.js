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