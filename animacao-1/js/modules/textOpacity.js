const initTextLoading = () => {

};

const removerConteudo = (names) => {
  // container
  const containerNames = document.querySelector('[data-text-container]');

  let contem = false;

  // se os nomes contiverem a classe anim, muda o valor
  // de contem para true
  names.forEach((name) => {
    if (name.classList.contains('anim')) {
      contem = true;
    }
  });

  // Se contem for true remove o container com os nomes
  if (contem) {
    containerNames.remove();
  }
};

// Função para criar animação de opacidade
const initAnimations = () => {
  const names = document.querySelectorAll('[data-anim="names"]');

  // adicionar a classe anim a cada item com intervalo de tempo
  // referente ao seu inde [0s, 1s, 2s...]
  names.forEach((name, index) => {
    setTimeout(() => {
      name.classList.add('anim');
    }, 1000 * index);
  });

  // inicia a função de remover após o tamanho total de names
  // * 2 (tempo de delay).
  setTimeout(() => {
    removerConteudo(names);
  }, `${names.length * 2}000`);
};

// ao carregar a página inicia as animações no texto
window.addEventListener('pageshow', initAnimations);

export default initTextLoading;
