
const preco = Number(prompt("Informe o preço do produto: "))

const desconto = preco - (preco * 0.10) 

const parcelado = preco / 3

alert(`O preço é R$:  ${preco.toFixed(2)}\n O pagamento à vista é R$:  ${desconto.toFixed(2)}\n Ou 3x de R$: ${parcelado.toFixed(2)} `)
