// Menu burger - Code simplifié et fonctionnel
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.hero-menu-toggle');
  const menuList = document.querySelector('#hero-menu-list');
  
  if (menuToggle && menuList) {
    menuToggle.addEventListener('click', function() {
      // Toggle de la classe menu-open
      menuList.classList.toggle('menu-open');
      
      // Mise à jour de l'attribut aria pour l'accessibilité
      const isOpen = menuList.classList.contains('menu-open');
      this.setAttribute('aria-expanded', isOpen);
    });
  }
});