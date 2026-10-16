document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente

    // Captura los valores de los campos
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let age = parseInt(document.getElementById('age').value, 10);
    let ageError = document.getElementById('ageError');

    // Validación nombre de usuario
    if (!username || username.length < 3) {
        alert('El nombre de usuario debe tener al menos 3 caracteres.');
        return;
    }

    // Validación contraseñas
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Validación edad
    if (isNaN(age) || age < 18) {
        ageError.style.display = 'block';
        alert('Debes ser mayor o igual a 18 años para registrarte.');
        return;
    } else {
        ageError.style.display = 'none';
    }

    // Si todo está bien, envías el formulario o haces tu lógica aquí
    console.log('Formulario enviado');
    console.log('Nombre de Usuario:', username);
    console.log('Email:', email);
    console.log('Edad:', age);
    console.log('Contraseña:', password);

    // Aquí puedes agregar tu fetch o lo que necesites para enviar al servidor

});


