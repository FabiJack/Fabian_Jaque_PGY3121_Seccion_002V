document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento donde se mostrará la fecha y hora
    var fechaHoraDiv = document.getElementById("fechaHora");

    // Obtener la fecha y hora actual del sistema
    var fechaHoraActual = new Date();

    // Obtener hora, mes y día
    var hora = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundo = fechaHoraActual.getSeconds();
    var mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
    var dia = fechaHoraActual.getDate();
    var año = fechaHoraActual.getFullYear();

    // Formatear la fecha y hora
    var fechaHoraFormateada = `${hora}:${minutos}:${segundo} - ${dia}/${mes}/${año}`;

    // Agregar la fecha y hora al elemento HTML
    fechaHoraDiv.innerText = fechaHoraFormateada;
});
