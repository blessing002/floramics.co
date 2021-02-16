$(document).ready(function() {
    $('#btnSend').click(function() {
        var validacion = '';

        // Validado Nombre ==============================
        if ($('#nombre').val() == '') {
            validacion += '<p>Escriba un nombre</p>';
            $('#nombre').css("border-bottom-color", "#F14B4B");
        } else {
            $('#nombre').css("border-bottom-color", "#ff851b");
        }

        // Validado Apellidos ==============================
        if ($('#apellidos').val() == '') {
            validacion += '<p>Ingrese sus apellidos</p>';
            $('#apellidos').css("border-bottom-color", "#F14B4B")
        } else {
            $('#apellidos').css("border-bottom-color", "#ff851b");
        }

        // Validando Correo electronico ================
        if ($('#correo').val() == '') {
            validacion += '<p>Ingrese su correo electronico</p>';
            $('#correo').css("border-bottom-color", "#F14B4B");
        } else {
            $('#correo').css("border-bottom-color", "#ff851b");
        }

        // Validando Mensaje ===========================
        if ($('#mensaje').val() == '') {
            validacion += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B");
        } else {
            $('#mensaje').css("border-bottom-color", "#ff851b");
        }

        // ENVIANDO MENSAJE ============================
        if (validacion == '' == false) {
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                validacion +
                '<span class="btn_close" id="btnClose">Cerrar</span>'
            '</div>' +
            '</div>';

            $('body').append(mensajeModal);
        } else {


            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function() {
            $('.modal_wrap').remove();
        });

    });
});