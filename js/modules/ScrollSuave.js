export default function scrollSuave() {
  const links = document.querySelectorAll('[data-link-interno] a[href^="#"]');
  const events = ['touchstart', 'click'];

  const scrollToSection = (event) => {
    if (event.cancelable) event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
    });

    // const sectionTop = section.offsetTop;
    // window.scrollTo({
    //   top: sectionTop,
    //   behavior: 'smooth',
    // });
  };

  events.forEach((userEvent) => {
    links.forEach((link) => {
      link.addEventListener(userEvent, scrollToSection);
    });
  });
}
