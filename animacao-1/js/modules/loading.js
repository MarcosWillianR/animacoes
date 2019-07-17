export default class Loading {
  constructor(containers, timeout) {
    this.container = document.querySelector(containers);
    this.timeOut = timeout || 3;
  }

  criarAnimacao(loadingContent) {
    const loading = loadingContent;

    setTimeout(() => {
      loading.classList.replace('on', 'off');
    }, `${this.timeOut}000`);
  }

  criarHtml() {
    this.divLoading = document.createElement('div');
    this.divLoading.classList.add('loading-wrapper', 'on');

    this.divLoading.innerHTML = `
    <span class="anim__circle" data-anim="loading"></span>
    <span class="anim__circle" data-anim="loading"></span>
    <span class="anim__circle" data-anim="loading"></span>
    <span class="anim__circle" data-anim="loading"></span>
    `;

    this.criarAnimacao(this.divLoading);

    return this.divLoading;
  }

  inserirNoDom() {
    const loading = this.criarHtml();

    this.container.appendChild(loading);
  }

  init() {
    if (this.container !== undefined) {
      this.inserirNoDom();
    }

    return this;
  }
}
