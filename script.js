function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Padding con ceros a la izquierda
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializar inmediatamente para evitar retraso de 1 segundo
updateClock();

// Pequeño efecto de consola al cargar
console.log("%c SISTEMA INICIALIZADO", "color: #00ff66; font-size: 20px; font-weight: bold; background: black; padding: 10px;");
console.log("Conectado al servidor: 100.97.30.99");
