function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const fermer = document.querySelector('.fermer');
    burger.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
        fermer.classList.add('visible');
        burger.classList.add('hidden');
    });
    fermer.addEventListener('click', (e) => {
        navbar.classList.remove('show-nav');
        burger.classList.remove('hidden');
        fermer.classList.remove('visible');
    });
  }
toggleMenu();