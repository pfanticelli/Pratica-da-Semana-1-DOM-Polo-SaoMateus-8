// Selecionar todos elementos da classe 'produto_preco'
const precos = document.getElementsByClassName('produto_preco');

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
let total = 0;
for (let i = 0; i < precos.length; i++) {
  total += parseFloat(precos[i].innerText);
}

// Escrever no conteúdo da página o valor da soma 
document.write('Total: R$ ', total);
