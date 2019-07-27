import debounce from './helper/debounce.js';

export default class ScrollAnim {
  constructor(elements, items) {
    this.elements = document.querySelectorAll(elements);
    this.items = document.querySelectorAll(items) || null;

    this.windowMetade = window.innerHeight * 0.6;
  }


  // Tem que arrumar isso aqui ainda \/
  scrollItemsAnimation() {
    this.items.forEach((itemAnim) => {
      const { top: itemTop } = itemAnim.getBoundingClientRect();

      // console.log(Math.floor(itemTop * 0.1));

      const styleItem = itemAnim.style;
      styleItem.transform = `translate3d(0,${itemTop * 0.1}px,0)`;
      // console.log(styleItem.transform);
    });
  }

  getDistance() {
    this.distance = [...this.elements].map((element) => {
      const { offsetTop: elementTop } = element;
      return {
        element,
        offsetTop: Math.floor(elementTop - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((element) => {
      if (window.pageYOffset > element.offsetTop) {
        // Fazer algo quando o elemento estiver visível
        // console.log('sessão visível');
      } else {
        // Fazer algo quando o elemento estiver invisível
        // console.log('sessão invisível');
      }
    });
  }

  addEventInWindow() {
    window.addEventListener('scroll', this.checkDistance);
    if (this.items.length) {
      window.addEventListener('scroll', this.scrollItemsAnimation);
    }
  }

  bindEvents() {
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    this.scrollItemsAnimation = debounce(this.scrollItemsAnimation.bind(this), 10);
  }

  init() {
    if (this.elements.length) {
      this.getDistance();
      this.bindEvents();
      this.addEventInWindow();
    }
    return this;
  }

  stopScroll() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
