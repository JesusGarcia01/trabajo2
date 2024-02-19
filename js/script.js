function cargarImagen() {
    const startTime = performance.now(); // Inicia el contador de tiempo
    const contenedorImagen = document.getElementById('contenedorImagen');
    const imagen = new Image();

    imagen.onload = function() {
        const endTime = performance.now(); // Finaliza el contador de tiempo
        const tiempoTranscurrido = (endTime - startTime) / 1000; // Convertir de milisegundos a segundos
        document.getElementById('contadorTiempo').innerText = `Tiempo transcurrido: ${tiempoTranscurrido.toFixed(2)} segundos`;

        contenedorImagen.appendChild(imagen);
    };

    imagen.src = './imagen/imagen1.jpg'; // Coloca aquí la URL de la imagen que deseas cargar
}