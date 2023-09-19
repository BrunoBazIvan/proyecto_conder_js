
document.addEventListener("DOMContentLoaded", function () {
  // Verifica si hay un usuario almacenado en localStorage
  const nombreUsuarioRecordado = localStorage.getItem("nombreUsuario");
  const nombreUsuario = sessionStorage.getItem("nombreUsuario");
  // Si no hay un usuario almacenado, redirige a login.html
  if (!nombreUsuarioRecordado && !nombreUsuario ) {
    window.location.href = "login.html";
  }
  
});
class Producto {
    constructor (idProducto, imgProducto, nombreProducto, descripcionProducto, claseProducto, precio){
        this.idProducto = idProducto
        this.imgProducto = imgProducto
        this.nombreProducto = nombreProducto   
        this.descripcionProducto = descripcionProducto
        this.claseProducto = claseProducto
        this.precio = precio
    }
}   

let productosDados = [];
let productosFiguras = [];

let dadoGatito = new Producto(1 ,"https://i.pinimg.com/564x/3f/0e/e6/3f0ee6258c7d822dbbebb0692447ac6a.jpg", "Gatitos", "Fabuloso juego de dados con llamativo diseño de Gatitos y colores fantasticos.", ".dado", 1500);
let dadoObsidiana = new Producto(2 ,"https://i.pinimg.com/564x/26/18/0f/26180f627e89171a6a2409689d8d5d5f.jpg", "Obsidiana", "Fabuloso juego de dados con llamativo diseño de Obsidiana y colores fantasticos.", ".dado", 1700);
let dadoCosmos = new Producto(3 , "https://i.pinimg.com/564x/2e/ac/14/2eac1403ad5ca6adf60a2d8b53d10d89.jpg", "Cosmos", "Fabuloso juego de dados con llamativo diseño de Cosmos y colores fantasticos.", ".dado", 1400);
let dadoGalaxia = new Producto(4 ,"https://i.pinimg.com/564x/41/bf/58/41bf5862fa30e235bf7500e68f4f2364.jpg", "Galaxia", "Fabuloso juego de dados con llamativo diseño de Galaxia y colores fantasticos.", ".dado",1000);
let dadoVideoJuego = new Producto(5 ,"https://i.pinimg.com/564x/1a/af/95/1aaf95916f2c3120a95925f92b0962fd.jpg", "Video Juegos", "Fabuloso juego de dados con llamativo diseño de Video Juegos y colores fantasticos.", ".dado",2000);
let dadoArcoiris = new Producto(6 ,"https://i.pinimg.com/564x/ae/7c/c5/ae7cc528233c495cea481138c0ff0b55.jpg", "Arcoiris", "Fabuloso juego de dados con llamativo diseño de Arcoiris y colores fantasticos.", ".dado",1800);

productosDados.push(dadoGatito, dadoObsidiana, dadoCosmos, dadoGalaxia, dadoVideoJuego, dadoArcoiris);

let figuraEnanoMontado = new Producto(7 ,"https://i.pinimg.com/564x/20/f3/05/20f305e5eb0fd54907f9e723a6acd9f2.jpg", "Enano Montado", "Geniales miniaturas para darles vida a tus personajes.", ".mini", 3000);
let figuraXanathar = new Producto(8 ,"https://i.pinimg.com/564x/7c/84/83/7c8483ab7a9338a0920ef92fa4f62e28.jpg", "Xanathar's", "Geniales miniaturas para darles vida a tus personajes.", ".mini",3000);
let figuraEnanoGuerrero = new Producto(9 ,"https://i.pinimg.com/564x/15/af/ff/15affff9c3dc6c5e70fa58543e2d65cd.jpg", "Enano Guerrero", "Geniales miniaturas para darles vida a tus personajes.", ".mini",3500);
let figuraTrasgo = new Producto(10 ,"https://i.pinimg.com/564x/3e/13/f1/3e13f14f3d8097810f172b7205243506.jpg", "Trasgo", "Geniales miniaturas para darles vida a tus personajes.", ".mini",2800);
let figuraDesuellaMentes = new Producto(11 ,"https://i.pinimg.com/564x/02/a8/35/02a8354f5df804f54cb6f670cba6d8ff.jpg", "Desuellamentes", "Geniales miniaturas para darles vida a tus personajes.", ".mini",2850);
let figuraMujerLagarto = new Producto(12 ,"https://i.pinimg.com/564x/59/c1/a0/59c1a0cfa0cd44163e442b773cc241db.jpg", "Mujer Lagarto", "Geniales miniaturas para darles vida a tus personajes.", ".mini", 2700);

productosFiguras.push(figuraDesuellaMentes, figuraEnanoGuerrero, figuraEnanoMontado, figuraMujerLagarto, figuraTrasgo, figuraXanathar);

const contenedorItems = document.getElementById ('contenedorItems');

  // Agrega un evento para detectar cambios en el dropdown
  categoriaDropdown.addEventListener('change', () => {
    mostrarProductos(categoriaDropdown.value);
  });

  let productosMostrados = [];

  let mostrarProductos = (categoria) => {
    contenedorItems.innerHTML = "";    
    if (categoria === "todos") {
      // Muestra todos los productos
      productosMostrados = [...productosDados, ...productosFiguras];
    } else if (categoria === "dados") {
      // Muestra productos de la categoría "dados"
      productosMostrados = productosDados;
    } else if (categoria === "figuras") {
      // Muestra productos de la categoría "figuras"
      productosMostrados = productosFiguras;
    }
    productosMostrados.forEach((producto) => {
      const div = document.createElement("div");
      div.innerHTML += `
              <div class="card text-center articulo ${producto.claseProducto}">
                <img src="${producto.imgProducto}" class="card-img-top" alt="${producto.nombreProducto}">
                <div class="card-body ">
                  <h5 class="card-title">${producto.nombreProducto}</h5>
                  <p class="card-text">${producto.descripcionProducto}</p>
                  <p> $${producto.precio}</p>
                  <button id="${producto.idProducto}" class="btn btn-primary" data-id="5">Añadir al carrito</button>
                </div>
              </div>
          `;
      contenedorItems.appendChild(div);

  });

      const carrito = document.querySelector('#carrito');
      const total = document.querySelector('#total');
      const vaciarCarritoButton = document.querySelector('#vaciarCarrito');
      const comprar = document.getElementById('comprar')
      
      let carritoItems = [];
      let totalPrecio = 0;
      // Función para agregar un producto al carrito
      function agregarAlCarrito(producto) {
        carritoItems.push(producto);
        actualizarCarrito();
      }

      // Función para actualizar la lista del carrito y el total
      function actualizarCarrito() {
        carrito.innerHTML = '';
        totalPrecio = 0;

        carritoItems.forEach(item => {
          const itemCarrito = document.createElement('li');
          itemCarrito.textContent = `${item.nombreProducto} - $${item.precio.toFixed(2)}`;
          carrito.appendChild(itemCarrito);
          totalPrecio += item.precio;
        });

        total.textContent = totalPrecio.toFixed(2);
      }
      // Agregar evento de clic a los botones "Añadir al carrito" en los productos
          productosMostrados.forEach(producto => {
            const botonAgregar = document.getElementById(producto.idProducto.toString());
              botonAgregar.addEventListener('click', () => {
              agregarAlCarrito(producto);
            });
      }   );
            // Agregar evento de clic al botón "Vaciar Carrito"
          vaciarCarritoButton.addEventListener('click', () => {
          carritoItems = [];
        actualizarCarrito();
    }); 
    // agregar evento de clic al botón "comprar"
    comprar.addEventListener('click', ()=> {
      
      const totalNum = parseFloat(total.textContent);

      if( totalNum > 0 ){
              swal('👍', 'Se proceso tu compra correctamente', 'success',{
        buttons: {
            defeat: "Seguir viendo",
          },
    });
    carritoItems = [];
    actualizarCarrito(); 
    }else{
      swal('👎', 'No hay items en su carro', 'error',{
        buttons: {
            defeat: "Seguir viendo",
          },
    });
      }
    })
};


  // Inicialmente, muestra todos los productos
  mostrarProductos("todos");
