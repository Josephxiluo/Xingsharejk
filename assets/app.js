const menuLinks = [...document.querySelectorAll('.menu a')];
const sections = menuLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveMenu = () => {
  let current = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) {
      current = section;
    }
  });

  menuLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`);
  });
};

window.addEventListener('scroll', setActiveMenu, { passive: true });
setActiveMenu();
