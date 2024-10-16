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
            window.location.href = "http://pagina-destino.com";  // Aquí pon la URL a la que deseas redirigir
            break;
        default:
            output.textContent = "Comando incorrecto. Intenta de nuevo.";
            output.style.color = 'pink';
        
    }
}




