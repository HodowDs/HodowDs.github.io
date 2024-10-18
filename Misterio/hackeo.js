function checkCommand() {
    const commandInput = document.getElementById('commandInput').value;
    const output = document.getElementById('output');
    
    switch(commandInput) {
        case "fan":
            output.textContent = "El chico que más amo en este mundo, es mi novio y lo quiero muchísimo, gracias por estar en mi vida chico lindo.";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "2710":
            output.textContent = "La fecha más bonita del mundo, el día que le pedí a cierta chica que sea mi novia, la amo con todo mi corazón y estoy feliz de tenerla.";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Sofi":
            output.textContent = "Eres tu, la persona que amo y que siempre me acompaña en las buenas y en las malas, gracias por estar en mi vida hermosa.";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Amor":
            output.textContent = "Lo que siento por ti, simplemente te amo :)";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Negro":
            output.textContent = "Tu color de piel :0";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Minecraft":
            output.textContent = "Cuando quieras tenemos una cita en minecraft toma captura :)";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Bonsai":
            output.textContent = "En algún lugar de mi habitación escondí un color que inventé para vos no sé su nombre ni cuanto brilla pero sé que es tuyo";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Poema":
            output.textContent = "";
            output.style.color = 'white';
            poem.style.display = 'block';
            break;
        case "siguiente":
            window.location.href = "https://hodowds.github.io/Misterio/2años";  // Aquí pon la URL a la que deseas redirigir
            break;
        case "Cita":
            output.textContent = "Vale por una cita cuando quieras, toma captura :)";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Gatito":
            output.textContent = "Ahora vamos a tener 90 gatitos y no puedes hacer nada muajajajajaja";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Sexo":
            output.textContent = "Cuando quieras bb";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Regalo":
            output.textContent = "Escrible la palabra siguiente para ir a tu regalo :D";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Beso":
            output.textContent = "Vale por muchos besos";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Estrella":
            output.textContent = "Tu eres una estrella porque a pesar de la distancia tu luz es lo más lindo del mundo.";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Platosanetachun":
            output.textContent = "Te amo con todo mi corazón :D";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "2022":
            output.textContent = "El año en el que comenzamos a salir tu y yo";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Chachacha":
            output.textContent = "Vale por cantarte la canción que quieras cuando quieras";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Pelicula":
            output.textContent = "Ya lo escribiste y no hay vuelta atrás ahora tenemos que ver una peli muajajajaja";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        case "Aniversario":
            output.textContent = "Uno de los momentos mas lindos :D";
            output.style.color = 'white';
            poem.style.display = 'none';
            break;
        default:
            output.textContent = "Comando incorrecto. Intenta de nuevo.";
            output.style.color = 'pink';
        
    }
}
