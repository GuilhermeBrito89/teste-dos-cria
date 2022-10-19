let nome ='Guilherme';
let idade = 19;
let estaAprovado = true;
let sobrenome = undefined;
let  corSelecionado = null;

let pessoa = { /*code para criar um objeto*/
    nome: 'Rafael',
    idade:25,
    estaAprovado:true,
    sobrenome: 'de souza  '
};

console.log(pessoa);

//////////////////////////////////////////////////////////////////////////////////

let familia = ['guilherme','larissa','marinaldo','marines', 10] /*array*/

console.log (familia[0])/*consigo escolher qualquer coisa que esteja dentro da array atraves de numeros*/
console.log (familia.length) /*tamanho da minha Array, que no caso é 5*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

let corSite = 'azul'; /*defini uma cor para o site*/
function resetaCor(){
    corSite = ''
} /*funçao para mudar a cor para vazio*/ /*função esta com parametro vazio*/

console.log(corSite)
resetaCor() /*chamar função*/
console.log(corSite) /*depois de chamar a função em cima e agora chamando a variavel corSite denovo a cor é mudada*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let colorSite = 'amarelo'; /*defini uma cor para o site*/
function resetarCor(cor,tonalidade){
    colorSite = cor + ' ' + tonalidade; /*coloquei para que a variavel fosse igual ao parametro da função*/
} 

console.log(colorSite) /*console.log da variavel*/
resetarCor('vermelho','claro')
console.log(colorSite) /*console.log do parametro depois de chamar a função*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Realizar uma tarefa, nao devolve nada*/
function dizerNome(){
    console.log('guilherme');
}

dizerNome()

//Faz um calculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor* 2;
}

// console.log(MultiplicarPorDois(10))

let resultado = MultiplicarPorDois(5)
console.log(resultado)

///////////////////////////////////////////////////////////////////////////

//OPeradores Aritmeticos
// let salario = 100;

// + , - , * , / , **

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

// ++ --

let velhice = 18;

console.log(++velhice) //se colocar o ++ ou -- na frente ele soma ou diminui logo, mas se colocar depois somente na proxima linha que for escrita console.log que o resultado vai aparecer

///////////////////////////////////////////////////////////////////////////////////////////////////////

let cliente = 'guilherme'
let conta = 2630
var saldo = 1500
let deposito = 1500
console.log('cliente: '+ cliente + '\nconta: ' + conta + '\nsaldo:' + saldo )
var saldo = saldo + deposito
 console.log("Novo deposito na conta: " + conta + " \nsaldo atualizado: " + saldo)
//observa que so da pra redefinir variavel sem o let , somente da pra definir com var (saldo = saldo + deposito)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
let  dinheiro = 2000
if (dinheiro >= 2000){
    console.log('aulas')
} else {
    console.log('nada de aulas')
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let temperatura = prompt('digite sua temperatura')
if (temperatura >= 40){
    console.log('ta fudido meu paceiro')
}else{
    console.log('ta tranquilo')
}
//////////////////////////////////////////////////////////////////////////////////////////
function verificarPermissões(age){
    age = prompt('digite sua age')

if(age >= 18){
    return "voce pode dirigir e votar"
}else if (age < 18 && age >= 16){
    return "voce pode votar mas nao pode dirigir"
} else {
    return "voce nao pode votar e nem dirigir"
}
}

console.log(verificarPermissões())

////////////////////////////////////////////////////////////////////////////////////
function pizza (){

let saborPizza = prompt('qual a pizza')


if (saborPizza == "marguerita") {
    console.log("Começando a fazer pizza marguerita ");
   } else if (saborPizza == "quatro queijos "){
    console.log("Começando a fazer pizza quatro queijos");
   } else {
    console.log("Sabor da pizza informado não disponível!");
   }
}

   console.log(pizza())

//////////////////////////////////////////////////////////////////////////////////

function imc(alt, peso){
     alt = prompt('digite sua alt')
     peso = prompt('digite seu peso')
    let result = alt * peso

    if(result < 17){
        return alert('voce esta abaixo do peso')
    }else{
        return alert('voce')
    }
}

console.log(imc())
/////////////////////////////////////////////////////////////////////////////////

function olaNome(nome) {
    nome = prompt()
    console.log("Olá " + nome);
   }

   console.log(olaNome())

   ///////////////////////////////////////////////////////////////////////////////////
//    var nome = prompt('Qual é o seu
// nome?');
// var saudacao = `Olá ${nome}!
// Como você está?
// `;
// crase como string

////////////////////////////////////////////////////////////////////////////////
var nMastigadas = 0;
while(nMastigadas < 20) {
 console.log(`Mastigada de número ${nMastigadas} realizada`);
 nMastigadas++;
}
console.log('Finalmente engoliu!');

///////////////////////////////////////////////////////////////////////////