window.onload = function() {
  var targetDate = new Date("June 10, 2020").getTime();

  setInterval(function() {
    var currentDate = new Date();
    var timeDifference = currentDate - targetDate;

    var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.436875)); // Promedio de días en un mes (365.25 / 12)
    var weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = "Han pasado " + years + " años, " + months + " meses, "  + weeks + " semanas, " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos desde el día que tú y yo somos mejores amigos";

  }, 1000);
};
