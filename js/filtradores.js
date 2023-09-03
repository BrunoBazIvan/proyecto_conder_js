const articulos = document.querySelectorAll(".articulo");

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        const searchTerm = e.target.value.trim().toLowerCase();
        articulos.forEach(item => {
            const itemName = item.querySelector(".card-title").textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
});

// llamamos a el div que contiene el imput y el label de dados //
const divDadosCheck = document.getElementById("divDadosCheck")
// llamamos a el div que contiene el input y el label de minis //
const divMinisCheck = document.getElementById("divMinisCheck")
// llamamos al checkbox de dados//
const checkDados = document.getElementById("filtroDados")
// llamamos al checkbox de misnis//
const checkMinis = document.getElementById("filtroMinis")

// Escuchamos si se hace clic en el div de Dados
divDadosCheck.addEventListener('click', function(){
    checkDados.checked = !checkDados.checked;
});

// Event listener para la casilla de verificación de Dados
checkDados.addEventListener('click', function() {
    // Cambia el estado del div al contrario de su estado actual
    checkDados.classList.toggle('activo');
    event.stopPropagation()
});

// Escuchamos si se hace clic en el div de Minis
divMinisCheck.addEventListener('click', function(){
    checkMinis.checked = !checkMinis.checked;
});

// Event listener para la casilla de verificación de Minis
checkMinis.addEventListener('click', function() {
    // Cambia el estado del div al contrario de su estado actual
    checkMinis.classList.toggle('activo');  
    event.stopPropagation()
});

// Obtener las casillas de verificación y las tarjetas
// Evento change para divMinisCheck
let dropDown = document.getElementById("dropDown");
dropDown.addEventListener("click", () =>{
    let listaDados = document.querySelectorAll('.dado');
    let listaMinis = document.querySelectorAll('.mini');
    if (checkDados.checked){
        listaMinis.forEach((mini) =>{
            mini.style.display= "none";
        });
    } else if (checkMinis.checked){
        listaDados.forEach((dado) =>{
            dado.style.display= "none";
        })
    } else if ((checkDados.checked && checkMinis.checked) || (!checkDados.checked && !checkMinis.checked)){
        listaDados.forEach((dado) =>{
            dado.style.display= "block";
        })
        listaMinis.forEach((mini) => {
            mini.style.display= "block";
        })
    }
});
