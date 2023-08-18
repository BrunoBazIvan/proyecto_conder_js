const productos = [
    {nombre:"Dados Gatitos", precio:600},
    {nombre:"Dados Obsidiana", precio:600},
    {nombre:"Dados Arcoiris", precio:600},
    {nombre:"Dados Galaxia", precio:600},
    {nombre:"Dados Noche", precio:600},
    {nombre:"Dados Zelda", precio:600},
]

let carrito = [];
let nombreDados = "";

for (const nombres of productos) {
   nombreDados += nombres.nombre + "\n" ;
}

let elegirMasDados = true;

while(elegirMasDados){
    let elegirDado = prompt("Nombres de los dados disponibles: \n" + nombreDados + "terminar")

    if (elegirDado.toLowerCase() === 'terminar') {
        elegirMasDados = false;
        }else {
            let productoEncontrado = productos.find(producto => producto.nombre === elegirDado);
        

        if (productoEncontrado) {
            carrito.push(productoEncontrado);
        alert(`Dado ${elegirDado} agregado al carrito.`);
    }else{
        alert("Nombre de dado no válido. Por favor, elige un nombre válido o escribe 'terminar' para finalizar.")
        }
    }
}

let total = 0;

let carritoTexto = "Has terminado de agregar dados al carrito. Aquí está tu carrito:\n";

for (const producto of carrito) {
    carritoTexto += `${producto.nombre} Precio: ${producto.precio}\n`;
    total += producto.precio;
}

carritoTexto += `Total: ${total}`;

alert(carritoTexto)