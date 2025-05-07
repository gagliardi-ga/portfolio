document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');
  
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggleBtn.classList.toggle('active'); // <- aqui ativa o X
    });
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('active'); // <- aqui fecha o X
      });
    });
  });
  