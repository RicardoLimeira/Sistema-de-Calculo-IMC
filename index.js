// Declaração de variaveis 
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informação ao usuario e atribuindo valores as variasveis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua Altura: "))
peso = parseInt(prompt("digite seu peso: "))

//calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

//exibindo as informações no console
console.log("Olá " + nome + ", voce tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu imc é " + imc + " kg/m ")