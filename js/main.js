

document.addEventListener("DOMContentLoaded", function () {
    const isSessionRecordada = localStorage.getItem("user");
    const isSessionActive = sessionStorage.getItem("user");
  
    // Redirigir según la condición
    if (!isSessionActive ) {
      window.location.href = 'login.html';
    }
  });

