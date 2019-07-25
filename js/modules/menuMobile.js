export default function menuMobile() {
  const header = document.querySelector('[data-mobile="header"]');
  const button = document.querySelector('[data-mobile="button"]');
  const content = document.querySelector('[data-mobile="content"]');

  const events = ['touchstart', 'click'];

  const handleClick = (event) => {
    if (event.cancelable) {
      event.preventDefault();
    }

    return [header, button, content].forEach(dom => dom.classList.toggle('is-active'));
  };

  events.forEach((userEvent) => {
    button.addEventListener(userEvent, handleClick, { passive: false });
  });
}
