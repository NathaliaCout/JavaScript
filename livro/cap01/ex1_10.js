
const valor = Number(prompt("Informe o valor total da conta: "))
const clientes = Number(prompt("Informe quantos clientes vão pagar a conta: "))

const valorpcliente = valor / clientes

alert(`O valor total da conta  é R$:  ${valor.toFixed(2)}\n Os clientes que vão pagar a conta são ${clientes} e o valor a ser pago por cliente é R$: ${valorpcliente.toFixed(2)} `)
