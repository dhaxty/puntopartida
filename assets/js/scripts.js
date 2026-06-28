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

//Boton Scroll Up
const btnScrollUp = document.querySelector(".scroll-up");

// Muestra u oculta el botón según la posición del scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnScrollUp.classList.add("scroll-up-visible");
    } else {
        btnScrollUp.classList.remove("scroll-up-visible");
    }
});

// Al hacer click sube suavemente al inicio
btnScrollUp.addEventListener("click", (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Retorno suave
    });
});