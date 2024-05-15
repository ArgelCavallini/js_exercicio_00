// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
var a = 5
var b = 3
var soma = a + b

console.log("Resultado da soma:", soma)
alert("Resultado da soma: " + soma)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
var valor = "42"

if (typeof valor === "number") {
  console.log("É um número")
  alert("É um número")
} else {
  console.log("Não é um número")
  alert("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
var texto = "Olá, mundo!"

if (typeof texto === "string") {
  console.log("É uma string")
  alert("É uma string")
} else {
  console.log("Não é uma string")
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
var booleano = true

if (typeof booleano === "boolean") {
  console.log("É um booleano")
  alert("É um booleano")
} else {
  console.log("Não é um booleano")
  alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
var x = 10
var y = 7
var subtracao = x - y

console.log("Resultado da subtração:", subtracao)
alert("Resultado da subtração: " + subtracao)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
var m = 6
var n = 4
var multiplicacao = m * n

console.log("Resultado da multiplicação:", multiplicacao)
alert("Resultado da multiplicação: " + multiplicacao)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
var p = 20
var q = 5
var divisao = p / q

console.log("Resultado da divisão:", divisao)
alert("Resultado da divisão: " + divisao)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
var numeroPar = 8

if (numeroPar % 2 === 0) {
  console.log("É um número par")
  alert("É um número par")
} else {
  console.log("Não é um número par")
  alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
var numeroImpar = 9

if (numeroImpar % 2 !== 0) {
  console.log("É um número ímpar")
  alert("É um número ímpar")
} else {
  console.log("Não é um número ímpar")
  alert("Não é um número ímpar")
}
