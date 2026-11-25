/* Marca a página como "com JS" e revela os blocos conforme aparecem na tela */
document.documentElement.classList.add('js');
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((items) => {
    items.forEach(i => { if (i.isIntersecting) { i.target.classList.add('in'); io.unobserve(i.target); } });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
} else {
  els.forEach(el => el.classList.add('in'));
}
