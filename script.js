window.onload = function() {
  var targetDate = new Date("October 27, 2022").getTime();

  setInterval(function() {
    var currentDate = new Date();
    var timeDifference = currentDate - targetDate;

    var seconds = Math.floor(timeDifference / 1000) % 60;
    var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 30.500 ; // Aproximación promedio de días por mes
    var weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 52;
    var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
    var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.4375 * 12));

    document.getElementById("timer").innerHTML = "Han pasado " + years + " años, " + months + " meses, "  + weeks + " semanas, " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos desde el día que tú y yo somos novios";

  }, 1000);
};
