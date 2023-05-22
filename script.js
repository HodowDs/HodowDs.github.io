window.onload = function() {
    var targetDate = new Date("October 27, 2022").getTime();
  
    setInterval(function() {
      var currentDate = new Date();
      var timeDifference = currentDate - targetDate;
  
      var seconds = Math.floor(timeDifference / 1000) % 60;
      var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
      var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 30.4375; // Aproximación promedio de días por mes
      var months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
      var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.4375 * 12));
  
      document.getElementById("timer").innerHTML = "Han pasado " + years + " años, " + months + " meses, " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos desde el 27 de octubre de 2022.";
  
      if (currentDate.getDate() === 27) {
        var futureMessage = "Mensaje futuro";
        var currentMessage = "Mensaje presente";
        document.getElementById("currentMessage").innerHTML = futureMessage;
      }
    }, 1000);
  };
  
