import debounce from './helper/debounce.js';

export default class ScrollAnim {
  constructor(...elements) {
    this.elements = document.querySelectorAll(...elements);

    this.windowMetade = window.innerHeight * 0.6;
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
    this.distance.forEach((elementDist) => {
      const { element } = elementDist;

      if (window.pageYOffset > elementDist.offsetTop) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  }

  addEventInWindow() {
    window.addEventListener('scroll', this.checkDistance);
  }

  bindEvents() {
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  init() {
    if (this.elements.length) {
      this.bindEvents();
      // chamar o evento pelo menos uma vez na hora de abrir a página
      this.checkDistance();
      this.getDistance();
      this.addEventInWindow();
    }
    return this;
  }
}
