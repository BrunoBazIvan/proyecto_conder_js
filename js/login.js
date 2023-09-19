document.addEventListener("DOMContentLoaded", function () {




// guardamos el boton de enviar //
const botonEnviar = document.getElementById('boton')
 
    botonEnviar.addEventListener('click', function(){
        // guardamos el nombre del usuario en una variable//
        let nombreUsuario = document.getElementById('nombre').value;
        // guardamos la contraseña del usuario en una variable /7
        let contraseñaUsuario = document.getElementById('contraseña').value;
        // guardamos si el usuario dejo checked el boton de recordar //
        let recuerdame = document.querySelector("input[type='checkbox']").checked;

        function validarContraseña(){
            if(nombreUsuario.length > 4 && contraseñaUsuario.length > 6){
                return true;
            }else{
                return false;
            }
        }

        if(validarContraseña()){
            if(recuerdame){
                localStorage.setItem("nombreUsuario", nombreUsuario)
            }else{
                sessionStorage.setItem("nombreUsuario", nombreUsuario)
            }
            window.location.href = "index.html"
        }else{
            swal('Upss', 'Contraseña o Usuario muy corto', 'error',{
                buttons: {
                    defeat: "Volver a intentar",
                  },
            });
        }
    })
    
});


  