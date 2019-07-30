{
  class ModalMenu {
    constructor(container, button, menu, className) {
      this.container = document.querySelector(container);
      this.button = document.querySelector(button);
      this.menu = document.querySelector(menu);
      this.class = className || 'is-active';

      this.events = ['touchstart', 'click'];
    }

    setAttributes() {
      const btn = this.button;

      if (btn.classList.contains(this.class)) {
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'close menu');
      } else {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'open menu');
      }
    }

    toggleMenuEvent(event) {
      if (event.cancelable) event.preventDefault();

      const arrayElements = [this.container, this.button, this.menu];
      arrayElements.forEach((element) => {
        element.classList.toggle('is-active');
      });

      this.setAttributes();
    }

    addEventsInButton() {
      this.events.forEach((userEvent) => {
        this.button.addEventListener(userEvent, this.toggleMenuEvent, { passive: false });
      });
    }

    bindEvents() {
      this.toggleMenuEvent = this.toggleMenuEvent.bind(this);
    }

    init() {
      if (this.container && this.button && this.menu) {
        this.bindEvents();
        this.addEventsInButton();
      }
      return this;
    }
  }

  const modalMenu = new ModalMenu('[data-mobile="container"]', '[data-mobile="button"]', '[data-mobile="content"]');
  modalMenu.init();
}
