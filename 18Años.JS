const ageInput = document.querySelector('#age');
const ageError = document.querySelector('#ageError');

ageInput.addEventListener('input', function () {
    const ageValue = parseInt(ageInput.value, 10);
    
    // Si la edad es menor de 18 o no es un número, mostrar el error
    if (isNaN(ageValue) || ageValue < 18) {
        ageError.style.display = 'block';
    } else {
        ageError.style.display = 'none';
    }
});