const PIN = "241001"; // Código PIN para acceder al historial

        // Manejar el envío del formulario
        document.getElementById('accountForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que se recargue la página
            const accountNumber = document.getElementById('accountNumber').value;
            const usuario = basedatos.find(user => user.Cuenta === accountNumber);

            if (usuario) {
                almacenarHistorial(accountNumber, usuario.NombreCompleto); // Almacena el historial
                window.location.href = "pagina2.html"; // Redirige a la página2
            } else {
                document.getElementById('message').textContent = 'Número de cuenta no encontrado.';
            }
        });

        // Función para almacenar el historial
        function almacenarHistorial(cuenta, nombreCompleto) {
            const historial = JSON.parse(localStorage.getItem('historial')) || [];
            const fechaActual = new Date().toLocaleDateString(); // Obtener la fecha actual en formato de cadena

            // Agregar la nueva entrada
            historial.push({
                Fecha: fechaActual,
                Cuenta: cuenta,
                NombreCompleto: nombreCompleto
            });

            // Guardar el historial actualizado en localStorage
            localStorage.setItem('historial', JSON.stringify(historial));
        }

        // Agregar evento al botón de historial
        document.getElementById('viewHistoryButton').addEventListener('click', () => {
            document.getElementById('pinModal').style.display = 'block'; // Muestra el contenedor del PIN
        });

        // Manejar el envío del PIN
        document.getElementById('submitPin').addEventListener('click', function() {
            const pinInput = document.getElementById('pinInput').value;

            if (pinInput === PIN) {
                window.location.href = "historial.html"; // Redirige a la página de historial
            } else {
                document.getElementById('pinMessage').textContent = 'PIN incorrecto. Intente de nuevo.';
            }
        });

        // Manejar el cierre del modal
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('pinModal').style.display = 'none';
        });

        // Cerrar el modal al hacer clic fuera de él
        window.onclick = function(event) {
            const modal = document.getElementById('pinModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };


        // Manejar el envío del formulario
document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    const accountNumber = document.getElementById('accountNumber').value;

    // Verificar el tipo de cuenta
    const tipoDeCuenta = obtenerTipoDeCuenta(accountNumber);
    if (tipoDeCuenta) {
        // Redirige a la página2 si la cuenta es válida
        window.location.href = "pagina2.html"; // Asegúrate de crear esta página
    } else {
        document.getElementById('message').textContent = 'Número de cuenta no encontrado.';
    }
});
