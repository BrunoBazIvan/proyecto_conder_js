const productos = [
    {nombre:"Dados Gatitos", precio:600},
    {nombre:"Dados Obsidiana", precio:600},
    {nombre:"Dados Arcoiris", precio:600},
    {nombre:"Dados Galaxia", precio:600},
    {nombre:"Dados Noche", precio:600},
    {nombre:"Dados Zelda", precio:600},
]

 let carrito = [];

document.addEventListener("DOMContentLoaded", function () {
    const isSessionRecordada = localStorage.getItem("user");
    const isSessionActive = sessionStorage.getItem("user");
  
    // Redirigir según la condición
    if (!isSessionActive ) {
      window.location.href = 'login.html';
    }
  });

