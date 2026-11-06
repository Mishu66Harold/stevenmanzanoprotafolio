const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.navigation');
menuButton?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
siteNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menú');
}));
document.querySelector('#print-button')?.addEventListener('click', () => window.print());
document.querySelector('#year').textContent = new Date().getFullYear();
