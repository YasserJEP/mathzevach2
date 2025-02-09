// Variables del juego
let numero1, numero2, operador, respuestaCorrecta;

// Generar nueva pregunta
function generarPregunta() {
    numero1 = Math.floor(Math.random() * 10) + 1;
    numero2 = Math.floor(Math.random() * 10) + 1;
    operador = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    
    // Calcular respuesta correcta
    switch(operador) {
        case '+': respuestaCorrecta = numero1 + numero2; break;
        case '-': respuestaCorrecta = numero1 - numero2; break;
        case '*': respuestaCorrecta = numero1 * numero2; break;
    }
    
    // Mostrar pregunta
    document.getElementById('pregunta').textContent = 
        `${numero1} ${operador} ${numero2} = ?`;
}

// Verificar respuesta del usuario
function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
    const resultadoElemento = document.getElementById('resultado');
    
    if (respuestaUsuario === respuestaCorrecta) {
        resultadoElemento.textContent = "¡Correcto! 🎉";
        resultadoElemento.style.color = "green";
    } else {
        resultadoElemento.textContent = "Incorrecto. Inténtalo de nuevo. ❌";
        resultadoElemento.style.color = "red";
    }
    
    // Limpiar campo y generar nueva pregunta después de 1.5 segundos
    setTimeout(() => {
        document.getElementById('respuesta').value = '';
        resultadoElemento.textContent = '';
        generarPregunta();
    }, 1500);
}

// Iniciar el juego al cargar la página
window.onload = generarPregunta;





