// Obtener referencias a los elementos del formulario
var form = document.getElementById('loginForm');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

// Definir nombre de usuario y contraseña permitidos
var allowedUsername = 'sofe';
var allowedPassword = '2710';

// Agregar un evento de escucha al formulario para el envío
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  var username = usernameInput.value;
  var password = passwordInput.value;
  
  // Validar el nombre de usuario y contraseña ingresados
  if (username === allowedUsername && password === allowedPassword) {
    setTimeout(function() {
      window.location.href = 'amigos.html';
    });
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});
