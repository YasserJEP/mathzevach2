
// En script.js
const canvas = document.getElementById('circuloCanvas');
const ctx = canvas.getContext('2d');
const radioSlider = document.getElementById('radio');

function dibujarCirculo(radio) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(100, 100, radio, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e74c3c';
    ctx.stroke();
    
    // Calcular área
    document.getElementById('area').textContent = (Math.PI * radio * radio).toFixed(2);
}

radioSlider.addEventListener('input', (e) => {
    const radio = parseInt(e.target.value);
    document.getElementById('valorRadio').textContent = radio;
    dibujarCirculo(radio);
});

dibujarCirculo(50); // Inicializar