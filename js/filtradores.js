import { productosMostrados } from './main.js'

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