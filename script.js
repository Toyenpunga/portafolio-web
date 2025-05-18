
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa solo los estilos
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa las funcionalidades JS de Bootstrap

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*
function copyEmail() {
    const email = "tomasrodriguezescolar@gmail.com";  // Reemplaza con tu email real
    navigator.clipboard.writeText(email)
        .then(() => alert("📩 ¡Correo copiado al portapapeles!"))
        .catch(err => console.error("Error al copiar el correo: ", err));
}
*/
// Esperar que el DOM cargue completamente
document.getElementById("copy-email").addEventListener("click", function() {
    // El correo que deseas copiar
    const email = "tomasrodriguezescolar@gmail.com";

    // Usamos la API de Clipboard para copiar el texto
    navigator.clipboard.writeText(email)
        .then(() => alert("📩 ¡Correo copiado al portapapeles!"))
        .catch(err => console.error("Error al copiar el correo: ", err));
});




