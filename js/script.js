function cargarImagen() {
    const startTime = performance.now(); 
    const contenedorImagen = document.getElementById('contenedorImagen');
    const imagen = new Image();

    imagen.onload = function() {
        const endTime = performance.now(); 
        const tiempoTranscurrido = (endTime - startTime) / 1000; 
        document.getElementById('contadorTiempo').innerText = `Tiempo transcurrido: ${tiempoTranscurrido.toFixed(2)} segundos`;

        contenedorImagen.appendChild(imagen);
    };

    imagen.src = './imagen/imagen1.jpg'; 
}