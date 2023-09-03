document.addEventListener("DOMContentLoaded", function (){

    let btn = document.getElementById("boton");
    
    btn.addEventListener("click", function () {
// se obtiene el valor ingresado en el por el usuario de nombre.
    const user = document.getElementById("nombre").value;

// se obtiene el valor ingresado en el por el usuario de contraseña.
    const pass = document.getElementById("contraseña").value;

// se obtiene la informacion para saber si el usuario activo el checkbox.
    const recordar = document.querySelector("input[type='checkbox']").checked;

//La función validarpass() se define para verificar si la longitud del nombre de usuario es mayor que 4 y la longitud de la contraseña es mayor que 6. Si ambas condiciones se cumplen, la función devuelve true, de lo contrario, devuelve false.
    function validarPassword (){
        if (user.length > 4 && pass.length > 6){
            return true;
        }else{
            return false;
        }    
    }

     if(validarPassword()){
            if(recordar){
                localStorage.setItem("user", user);
            }else{
                sessionStorage.setItem("user", user)
            }
            window.location.href = "index.html";
        }else {
            alert("Datos incorrectos");
          }
    });
});

const isSessionActive = localStorage.setItem("user", user);
  
  // Redirigir según la condición
  if (!isSessionActive) {
    window.location.href = 'login.html';
}