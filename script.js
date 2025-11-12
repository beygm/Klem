
// Animación al hacer scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});


// === EFECTO DE COLOR INTERACTIVO EN HERO ===
const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  // Actualiza la posición de la luz
  hero.style.setProperty('--x', `${x}%`);
  hero.style.setProperty('--y', `${y}%`);

  // Cambia suavemente el fondo según el movimiento
  const hue = Math.round((x + y) * 1.8);
  hero.style.background = `radial-gradient(circle at ${x}% ${y}%, hsl(${hue + 220}, 80%, 85%), hsl(${hue + 180}, 70%, 80%), hsl(${hue + 140}, 70%, 75%))`;
});

// Cuando el mouse sale, regresa al centro
hero.addEventListener('mouseleave', () => {
  hero.style.background = `radial-gradient(circle at center, #fff290ff, #e896f8ff, #c2beffff)`;
});
// === EFECTO DE COLOR INTERACTIVO EN TODA LA PÁGINA ===
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.body.style.setProperty('--x', `${x}%`);
  document.body.style.setProperty('--y', `${y}%`);

  const hue = Math.round((x + y) * 1.8);
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, 
    hsl(${hue + 220}, 80%, 85%), 
    hsl(${hue + 180}, 70%, 80%), 
    hsl(${hue + 140}, 70%, 75%))`;
});

document.addEventListener('mouseleave', () => {
  document.body.style.background = `radial-gradient(circle at center, #fff290ff, #e896f8ff, #c2beffff)`;
});
// === EFECTO DE COLOR INTERACTIVO GLOBAL (Mouse + Scroll) ===
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.body.style.setProperty('--x', `${x}%`);
  document.body.style.setProperty('--y', `${y}%`);

  actualizarFondo(x, y);
});

document.addEventListener('scroll', () => {
  const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const x = 50;
  const y = 50 + scroll * 50; // cambia según el desplazamiento
  actualizarFondo(x, y);
});

function actualizarFondo(x, y) {
  const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const hue = Math.round((x + y) * 1.8 + scroll * 360);
  
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%,
    hsl(${hue}, 80%, 85%),
    hsl(${hue + 40}, 75%, 80%),
    hsl(${hue + 80}, 70%, 75%))`;
}

document.addEventListener('mouseleave', () => {
  document.body.style.background = `radial-gradient(circle at center, #fff6b3, #f8d6ff, #c6c2ff)`;
});
