const botoes = document.querySelectorAll('.botoes');
const telefone = document.getElementById('telefone');
const clear = document.querySelector('.clear');

botoes.forEach(btn => btn.addEventListener('click', () => escreveNumero(telefone, btn.value)));

function escreveNumero(tel, numero) {
  tel.value += numero;
}

clear.addEventListener('click', () => {
  const num = telefone.value;
  telefone.value = num.substring(0, num.length - 1);
})
