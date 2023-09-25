// Seleccionamos los elementos del DOM que vamos a necesitar
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Agregamos un manejador de eventos al icono del menú
menuToggle.addEventListener('click', () => {
    // Alternamos la clase 'active' en la lista de navegación para mostrar u ocultar el menú
    navList.classList.toggle('active');
});
