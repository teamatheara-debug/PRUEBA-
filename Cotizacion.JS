// script.js

function calcularTotal() {
    // Obtener los elementos de los servicios
    const costoBasico = parseFloat(document.getElementById('costo_basico').value);
    const cantidadBasico = parseInt(document.getElementById('cantidad_basico').value);
    
    // Calcular el total para cada servicio
    const totalBasico = costoBasico * cantidadBasico;
    document.getElementById('total_basico').value = totalBasico.toFixed(2);

    // Calcular subtotal y total general
    const subtotal = totalBasico;
    const iva = parseFloat(document.getElementById('iva').value);
    const totalGeneral = subtotal * (1 + iva);

    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('total-general').value = totalGeneral.toFixed(2);
}

function enviarCotizacion() {
    alert('Cotización enviada exitosamente.');
}
