//Boton hamburguesa
const btnMenuToggle = document.querySelector(".nav-menu-toggle");
//Barra de navegacion
const navLinks = document.querySelectorAll(".enlaces-nav");

btnMenuToggle.addEventListener("click", () => {
    navLinks.forEach(nav => {
        nav.classList.toggle("nav-open");
        setTimeout(() => {
            nav.classList.toggle("nav-visible");
        }, 10);
    });
});