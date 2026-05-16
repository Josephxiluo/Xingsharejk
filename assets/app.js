const currentPage = document.body.dataset.page;
const menuLinks = [...document.querySelectorAll('.menu a')];

menuLinks.forEach((link) => {
  link.classList.toggle('active', link.dataset.page === currentPage);
});
