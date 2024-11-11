document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();
   alert('Mensaje enviado. Gracias por contactar con nosotros.');
});
function tema(){
    document.body.classList.toggle("dark-theme");
}