// Establece la fecha a la que estamos contando hacia atrás
var countDownDate = new Date("Oct 27, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
var countdownFunction = setInterval(function() {

    // Obtiene la fecha y hora actuales
    var now = new Date().getTime();

    // Calcula la distancia entre ahora y la fecha de cuenta regresiva
    var distance = countDownDate - now;

    // Cálculos de tiempo para días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en un elemento con id="countdown"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado, redirige a otra página
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Felices 2 años :D";
        window.location.href = "https://hodowds.github.io/Misterio/pista1.html"; // Cambia esto a la URL de destino
    }
}, 1000);
