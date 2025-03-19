// Inicializar EmailJS
(function(){
    emailjs.init("ECwB7tRlUHAG4uY_B"); // Reemplaza con tu User ID de EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener valores de los campos
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tema = document.getElementById("tema").value;
    let mensaje = document.getElementById("mensaje").value;

    // Datos a enviar por EmailJS
    let templateParams = {
        from_name: nombre,
        from_email: email,
        subject: tema,
        message: mensaje
    };

    // Enviar email
    emailjs.send("service_ikofi9v", "template_ylivqdl", templateParams)
    .then(function(response) {
        alert("Mensaje enviado correctamente.");
        document.getElementById("contactForm").reset(); // Limpiar formulario
    }, function(error) {
        alert("Error al enviar el mensaje. Inténtalo de nuevo.");
        console.log("Error:", error);
    });
});