const menuLinks = [...document.querySelectorAll('.menu a')];
const sections = menuLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveMenu = () => {
  const current = sections.findLast((section) => section.getBoundingClientRect().top <= 120) || sections[0];
  menuLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
  });
};

window.addEventListener('scroll', setActiveMenu, { passive: true });
setActiveMenu();
