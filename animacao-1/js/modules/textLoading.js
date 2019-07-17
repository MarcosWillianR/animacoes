export default class TextLoading {
  constructor(containers, timeout) {
    this.containers = document.querySelector(containers);
    this.timeout = timeout || 6;
  }

  criarAnimacao(textHtml) {
    const textAnim = textHtml;

    setTimeout(() => {
      textAnim.classList.replace('on', 'off');
    }, `${this.timeout}000`);
  }

  criarHtml() {
    this.divText = document.createElement('h1');
    this.divText.classList.add('anim__title', 'on');

    this.divText.innerHTML = `
        <span data-anim="names">Criado</span>
        <span data-anim="names">por</span>
        <span data-anim="names">Marcos</span>
        <span data-anim="names">Willian</span>
    `;

    this.criarAnimacao(this.divText);

    return this.divText;
  }

  inserirNoDom() {
    const textAnimDOM = this.criarHtml();

    this.containers.appendChild(textAnimDOM);
  }

  init() {
    if (this.containers !== undefined) {
      this.inserirNoDom();
    }

    return this;
  }
}
