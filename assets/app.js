const currentPage = document.body.dataset.page;
const menuLinks = [...document.querySelectorAll('.menu a')];

menuLinks.forEach((link) => {
  const isCurrent = link.dataset.page === currentPage;
  link.classList.toggle('active', isCurrent);
  if (isCurrent) {
    link.setAttribute('aria-current', 'page');
  } else {
    link.removeAttribute('aria-current');
  }
});
