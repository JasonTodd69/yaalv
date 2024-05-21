document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message').textContent = 'Se ha realizado el pago con éxito';
    document.getElementById('message').style.color = 'green';
    document.getElementById('inicio').style.display = 'flex';
});
document.getElementById('inicio').addEventListener('click', function() {
    // Aquí puedes agregar la lógica para regresar al inicio
    alert('Regresando al inicio...');
    javascript:location.replace('index.html')
});