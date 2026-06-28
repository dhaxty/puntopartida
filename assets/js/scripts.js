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

// ========================================= //
// MODAL — Ver detalle de auto               //
// ========================================= //

const modalOverlay   = document.getElementById('modal-auto');
const modalCerrarBtn = document.getElementById('modal-cerrar');

// Campos del modal
const modalFoto        = document.getElementById('modal-foto');
const modalNombre      = document.getElementById('modal-nombre');
const modalPrecio      = document.getElementById('modal-precio');
const modalAnio        = document.getElementById('modal-anio');
const modalKm          = document.getElementById('modal-km');
const modalMotor       = document.getElementById('modal-motor');
const modalTransmision = document.getElementById('modal-transmision');
const modalColor       = document.getElementById('modal-color');
const modalDescripcion = document.getElementById('modal-descripcion');

// Abrir modal al hacer clic en cualquier "Ver detalle"
document.querySelectorAll('.btn-ver-detalle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        // Leer los data-* del botón clickeado
        modalFoto.src            = btn.dataset.foto;
        modalFoto.alt            = btn.dataset.nombre;
        modalNombre.textContent  = btn.dataset.nombre;
        modalPrecio.textContent  = btn.dataset.precio;
        modalAnio.textContent    = btn.dataset.anio;
        modalKm.textContent      = btn.dataset.km;
        modalMotor.textContent   = btn.dataset.motor;
        modalTransmision.textContent = btn.dataset.transmision;
        modalColor.textContent   = btn.dataset.color;
        modalDescripcion.textContent = btn.dataset.descripcion;

        // Mostrar el modal
        modalOverlay.classList.add('modal-activo');
        document.body.style.overflow = 'hidden'; // evita scroll del fondo
    });
});

// Cerrar con el botón X
modalCerrarBtn.addEventListener('click', cerrarModal);

// Cerrar haciendo clic fuera del contenido
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        cerrarModal();
    }
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

function cerrarModal() {
    modalOverlay.classList.remove('modal-activo');
    document.body.style.overflow = ''; // restaura el scroll
}