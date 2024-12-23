
const nota1 = Number(prompt("Informe a 1º nota: "))
const nota2 = Number(prompt("Informe a 2º nota: "))

const  soma = nota1 + nota2

const media = soma / 2

alert(`A 1ª nota:  ${nota1.toFixed(1)}\n A 2ª nota:  ${nota2.toFixed(1)}\n Média: ${media.toFixed(1)} `)
