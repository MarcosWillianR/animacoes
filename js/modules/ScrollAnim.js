import debounce from './helper/debounce.js';


// O que falta?
//
// 1 º Ativar a animação apenas se os elementos estiverem visíveis
// porque a animação está ativando sempre que o elemento está a 70% da tela
// ou seja, ta errado, tem que refazer o calculo.
//
// 2 º para funcionar acho que seria só isso, depois é só otimizar o código
// e 3 º utilizar outros tipos de animações (scale, rotate, translateX etc...)

export default class ScrollAnim {
  constructor(elements) {
    this.elements = document.querySelectorAll(elements);

    this.windowMetade = window.innerHeight * 0.7;

    // objeto que vai ser ser mudado cada vez que o usuario
    // der o scroll ou soltar o botao esquerdo do mouse
    this.windowInitialPosition = { position: 0 };

    // objeto contendo todas as animações
    this.setAnimation = {
      translateY: 0,
      maxValueOfTranslateY: 500,
    };
  }

  // Função que pega a distancia do elemento e diminui
  // pela metade da tela
  // retorna uma array com um objeto contendo o offsettop e o elemento
  getDistance() {
    this.distance = [...this.elements].map((element) => {
      const { offsetTop: elementTop } = element;
      return {
        element,
        offsetTop: Math.floor((elementTop - this.windowMetade)),
      };
    });
  }

  getScrollPosition() {
    const newPosition = window.pageYOffset;

    this.windowInitialPosition.position = newPosition;

    // console.log(this.windowInitialPosition);
  }

  startAnimation(scrollPosition) {
    // Se o usuário estiver dando scroll para baixo,
    // O translate vai aumentar fazendo com que o item,
    // pareça estar descendo com o scroll
    if (scrollPosition > this.windowInitialPosition.position) {
      // console.log('down scroll');

      this.distance.forEach((elementAnim) => {
        if (this.setAnimation.translateY <= this.setAnimation.maxValueOfTranslateY) {
          this.setAnimation.translateY++;

          const stylesElement = elementAnim.element.style;
          stylesElement.transform = `translate3d(0,${this.setAnimation.translateY * 0.1}px,0)`;
        }
      });
      // Se o usuário estiver dando scroll para cima,
      // O translate vai diminuir fazendo com que o item,
      // pareça estar subindo com o scroll
    } else {
      // console.log('up scroll');
      this.distance.forEach((elementAnim) => {
        if (this.setAnimation.translateY >= 0) {
          this.setAnimation.translateY--;

          const stylesElement = elementAnim.element.style;
          stylesElement.transform = `translate3d(0,${this.setAnimation.translateY * 0.1}px,0)`;
        }
      });
    }
    // console.log(this.setAnimation);
  }

  // Verifica a distancia em que o item está,
  // do topo do window, se estiver perto o suficiente
  // inicia a animação
  checkDistance() {
    const newPosition = window.pageYOffset;

    this.distance.forEach((elementDist) => {
      if (window.pageYOffset > elementDist.offsetTop) {
        this.startAnimation(newPosition);
      } else {
        console.log('element invisible');
      }
    });
  }


  // adiciona o evento de wheel (scroll do meio do mouse)
  // e o evento mouseup (segurando o botao esquerdo)
  // que no caso seria se a pessoa estiver usando o botao do mouse
  // para descer a pagina
  // e chama a função de pegar a posição do scroll
  addEventInWindow() {
    window.addEventListener('scroll', this.checkDistance);

    ['wheel', 'mouseup'].forEach((desktopUserEvent) => {
      window.addEventListener(desktopUserEvent, this.getScrollPosition);
    });
  }

  bindEvents() {
    this.checkDistance = debounce(this.checkDistance.bind(this), 10);
    this.getScrollPosition = debounce(this.getScrollPosition.bind(this), 10);
  }

  init() {
    if (this.elements.length) {
      this.bindEvents();
      this.checkDistance();
      this.addEventInWindow();
      this.getDistance();
    }
    return this;
  }

  stopScroll() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
