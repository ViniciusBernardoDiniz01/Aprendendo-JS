/*aprendedo cosntante var let const

//declarando variaveis
var nome, sobrenome, soma, idade, somaN;

nome = 'Nicolas';
sobrenome = 'Cabral';
idade = 30;
soma = nome + " " + sobrenome;

somaN=idade+10;
pessoa = nome+" "+soman;

document.getElementById("texto").innerHTML = pessoa;

let x = 10;//aqui é 10

{
    let x = 2;//aqui é 2
}
//aqui tambem é 10;
document.getElementById("texto").innerHTML = x;

const x = 10;//aqui é 10

{
    const x = 2;//aqui é 2
}
//aqui tambem é 10;
document.getElementById("texto").innerHTML = x;
*/
// ---------------------------------------------------------

/*
//usando operadores

// Operadores matematico
var a, b, c, total;
a = 5;
b = 2;
c = a + b;

//Operadores de atibuição
a = a + b;
//ou
a += b;

//Operadores sequencias
var nome, sobrenome, nomeCompleto;

nome = "Gustavo";
sobrenome = "Teixeira";
nomeCompleto = nome + " " + sobrenome;

//Operadores Comparação

a = 5;
b = 8;
total = (a <= b); //True or false

//Operadores ternarios
var idade, eleitor, resultado;
idade = 18;
eleitor = (idade < 18) ? "Não eleitor" : "Sim, eleitor";



//Operadores Logicos
idade = 25;
eleitor = (idade < 18) ? "Não eleitor" : "Sim, eleitor";
resultado = (idade > 60 && idade < 70);//true or false
resultado = (idade === 60 || idade === 70);//true or false
resultado = !(idade === 60);//true or false
*/

// ------------------------------------------------------------

// funções

/*function soma(valor1, valor2){
    return valor1 + valor2;
}

function realDolar(real,dollar){
    return real * dollar;
}

var valorReal = 8;
var cotacao = 5.08;
    // document.getElementById("texto").innerHTML = soma(10,6);
    // var total = soma(10,23);
    document.getElementById("texto").innerHTML = "O valor do real transcrito para dollar é de "+realDolar(valorReal,cotacao)+ " Dollares";

function minhaFuncao(){
    var x = 2;
}
*/
//--------------------------------------------------------------------------------------------

//objeto
/*
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1324",
    buzina: function () { alert("Dalailamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") },
    completo: function () {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo;
    }
};

// console.log(carro["marca"]);
// carro.buzina();

console.log(carro.completo());
*/
// -------------------------------------------------------------------------------------------

//evento

/*
onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado
onfocus -> Disparado quando o elemento recebe o foco. Válido para input,
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.
*/

/*

function eventoClick(){
    document.body.style.backgroundColor = "yellow";
}

function eventodblClick(){
    document.body.style.backgroundColor = "red"
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraBlue(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}
// function adicionaText(){
//     let p = document.getElementById("texto");
//     p.append('O mouse se moveu<br>')
// }

function limpa(){
    document.getElementById("campoText").value = "";
}
function mudou(){
    console.log("Mudou");
}
function teclaPrecionada(){
    let input = document.getElementById("campoText").value;
    console.log("Tecla acionada");
    
}
*/

//--------------------------------------------------------------------------------------------

//array
/*
const lista = [
    "arroz",//0
    "feijão",//1
    "macarrão",//2
    "leite"//3
];

lista[4] = "Banana";
console.log(lista[4]);
*/
/*
const humano = [
    "Dimitri",
    "teixeira",
    30
];
*/
/*
const pessoas = {
    nome: "Dimitri",
    sobrenome: "Teixeira",
    idade: 30
};
*/

/*
const humano = [
    "Dimitri", 
    "Teixeira", 
    30, 
    "Professor"
];// array

alert(Array.isArray(humano))
*/

//---------------------------------------------------------------

//if e else
/*
var interruptor = "on";

if (interruptor == "on"){
    alert("A lampada esta ligada.");
}else{
    alert("A lampada esta deligada");
}
*/

/*
var hora = new Date().getHours();

if(hora < 12){
    alert("Bom dia");
}else if (hora <18){
    alert("Boa tarde");
}else{
    alert("Boa noite");
}
*/

/*
function verificar(){
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null){
        var p = document.getElementById("texto");
        p.innerHTML = "O campo abaixo não pode ficar vazio!";
        p.style.color = "red";
    }else{
        var p = document.getElementById("texto");
        p.innerHTML = "Ok tudo verificado!";
        p.style.color = "green";
    }
}
*/

// ------------------------------------------------------------------

//Switch

/*
switch(cor){
    case a:
        //codigo
    break;

    case b:
        //codigo
    break;

    case c:
        //codigo
    break;

    default:
        //ação padrao
}
*/
/*
function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);

    switch(dia){
        case 0:
            document.getElementById("texto").innerHTML = "Hoje é Domigo";
        break;
        case 1:
            document.getElementById("texto").innerHTML = "Hoje é Segunda";
        break;
        case 2:
            document.getElementById("texto").innerHTML = "Hoje é Terça";
        break;
        case 3:
            document.getElementById("texto").innerHTML = "Hoje é Quarta";
        break;
        case 4:
            document.getElementById("texto").innerHTML = "Hoje é Quinta";
        break;
        case 5:
            document.getElementById("texto").innerHTML = "Hoje é Sexta";
        break;
        case 6:
            document.getElementById("texto").innerHTML = "Hoje é Sabado";
        break;
        default:
            document.getElementById("texto").innerHTML = "Olhe sua data!!!"
    }
}
*/


/*
function verificaCor(){
    var cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch(cor){
        case "azul":
            document.body.style.backgroundColor = "Blue";
        break;
    
        case "vermelho":
            document.body.style.backgroundColor = "red";
        break;
    
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
        break;
    
        default:
            document.getElementById("texto").innerHTML = "Nenhuma cor disponivel para:"+" "+cor;
    }
}
*/
/*
let x = 0;

switch(x){
    case 0:
        document.getElementById("texto").innerHTML ="A variavel é 0";
        break;
    default:
        document.getElementById("texto").innerHTML ="Não foi encontrado no sitema!!";
        break;
}
*/
//----------------------------------------------------------------
// laço de repetiçao FOR

/*
for (let i = 0; i < 10001; i++) {
    document.getElementById("texto").innerHTML += i + ", ";
}
*/
/*
var ano = new Date().getFullYear();

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value = '" + i + "'>" + i + "<opition>"
}
*/
/*
const carros = ["Gol", "Fusca","Brasilia","Del Rei","Chevette"];
var tamanho = carros.length;

for(let i = 0; i<tamanho; i++){
    document.getElementById("texto").innerHTML += carros[i] + " - ";
}
*/
//----------------------------------------------------------------

// eventos de tempo
/*
function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou o cronometro";
    // ativa a funão apenas uma vez depois do tempo determinado
    tempo = setTimeout
    (function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";},5000);


}

function pararContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem";

}
*/
/*
function ativarContagem(){
   tempo = setInterval
   (function(){
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt(cronometro) - 1;

    if (soma === 0){
        document.getElementById("tempo").innerHTML = "Tempo esgotado";
        pararContagem()
    }else{
        document.getElementById("tempo").innerHTML = soma;
    }
   },1000)
}

function pararContagem(){
    clearInterval(tempo);
}
*/
//----------------------------------------------------------------

//Classe
/*
class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo+" "+"buzinou: Biiiiiiiiiiiiiiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno);
console.log(gol.buzina());
gol.ano = 2014;
console.log(gol.ano);
*/
//----------------------------------------------------------------
// Manipulando Datas

//comando para pegar a data
/*
let data = new Date();
console.log(data);
*/

//pega o ano atual
/*let data = new Date();

let ano = data.getFullYear;
console.log(ano);
*/
//pega o mes atual de 0 até 11 sendo 0 janeiro e 11 dezenbro
/*let data = new Date();

let mes = data.getMonth();
//console log do mes

const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);
*/

//Pega dia do mes - 1 ate 31
/*
let data = new Date();
let diaMes = data.getDate();
console.log(diaMes);
*/

//Dia da semana
/*
let data = new Date();
let diaSemana = data.getDay();

const diaDaSemana = [
    "Domindo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];
let diaDaSemanaEscrito = diaDaSemana[data.getDay()];
console.log(diaDaSemanaEscrito());
*/
//Pegar hora de 0 até 23
/*
let data = new Date();
let hora = data.getHours();
*/

//Pegar os minutos de 0 até 59
/*
let data = new Date();
let minutos = data.getMinutes();
*/

//Pegar os segundo de 0 a 59
/*
let data = new Date();
let segundos = data.getSeconds();
*/
//Pegar milissegundos de 0 ata 999
/*
let data = new Date();
let milissegundos = data.getMilliseconds();
*/
// Pegar a data no padrao Brasileiro - dia/mes/ano
/*
let data = new Date();
let dataBR = data.toLocaleString("pt-BR",{dateStyle: "short"});
*/

//pegar valores separados
/*
d = new Date();
diaMes = d.getDate();
mes = d.getMouth() + 1;
ano = d.getFullYear();

function addzero(x) { return x < 10 ? "0" + x : "" + x; }

let dataptbr = addzero(diaMes) + "/" + addzero(mes) + "/" + ano;
*/


//Comparar datas - maior ou menor ex:Vencimentos
/*
var hoje = new Date();
var vencimento = new Date(2024,10,12);

if(hoje > vencimento) {
    console.log("Sua conta esta vencida!")
}else{
    console.log("Sua conta ainda não venceu");
}
*/
//Diferença em dia entre duas datas
/*
var dataInicial = new Date();
var dataFinal = new Date(2034, 11, 31);

var diferençaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferençaEmDias = Math.ceil(diferençaTempo / (24 *60 *60 *1000));

console.log(diferençaEmDias + " Dias")
*/
//----------------------------------------------------------------
//JSON

//objeto carro
/*
const carro = {
    marca:"Fiat",
    modelo:"Uno",
    ano: 2001
};
*/
/*
const carro = {
    marca:"Fiat",
    modelo:"Uno",
    motor: ["1.6","1.4","1.0"]
};

// converteu para texto
let texto = JSON.stringify(carro);

// colocou texto no html
document.getElementById("area").innerHTML = texto;

// transformou em obj
let obj = JSON.parse(texto);

// mostrou no console
console.log(obj.motor[2]);
*/

/*
function buscarCEP() {
    let campoTexto = document.getElementById('cep').valeu;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoTexto + '/json/');
    ajax.send();

    ajax.onload = function () {
        // texto em obj
        let obj = JSON.parse(this.responseText);

        // valores requisitados
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;
       
        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " +cidade+ "<br> Estado: " +estado;
    }
}
*/