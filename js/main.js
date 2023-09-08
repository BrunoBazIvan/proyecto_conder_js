class Producto {
    constructor (idProducto, imgProducto, nombreProducto, descripcionProducto){
        this.idProducto = idProducto
        this.imgProducto = imgProducto
        this.nombreProducto = nombreProducto   
        this.descripcionProducto = descripcionProducto
    }
}   

let productosDados = [];
let productosFiguras = [];

let dadoGatito = new Producto(1 ,"https://i.pinimg.com/564x/3f/0e/e6/3f0ee6258c7d822dbbebb0692447ac6a.jpg", "Gatitos", "Fabuloso juego de dados con llamativo diseño de Gatitos y colores fantasticos.");
let dadoObsidiana = new Producto(2 ,"https://i.pinimg.com/564x/26/18/0f/26180f627e89171a6a2409689d8d5d5f.jpg", "Obsidiana", "Fabuloso juego de dados con llamativo diseño de Obsidiana y colores fantasticos.");
let dadoCosmos = new Producto(3 , "https://i.pinimg.com/564x/2e/ac/14/2eac1403ad5ca6adf60a2d8b53d10d89.jpg", "Cosmos", "Fabuloso juego de dados con llamativo diseño de Cosmos y colores fantasticos.");
let dadoGalaxia = new Producto(4 ,"https://i.pinimg.com/564x/41/bf/58/41bf5862fa30e235bf7500e68f4f2364.jpg", "Galaxia", "Fabuloso juego de dados con llamativo diseño de Galaxia y colores fantasticos.");
let dadoVideoJuego = new Producto(5 ,"https://i.pinimg.com/564x/1a/af/95/1aaf95916f2c3120a95925f92b0962fd.jpg", "Video Juegos", "Fabuloso juego de dados con llamativo diseño de Video Juegos y colores fantasticos.");
let dadoArcoiris = new Producto(6 ,"https://i.pinimg.com/564x/ae/7c/c5/ae7cc528233c495cea481138c0ff0b55.jpg", "Arcoiris", "Fabuloso juego de dados con llamativo diseño de Arcoiris y colores fantasticos.");

productosDados.push(dadoGatito, dadoObsidiana, dadoCosmos, dadoGalaxia, dadoVideoJuego, dadoArcoiris);

let figuraEnanoMontado = new Producto(1 ,"https://i.pinimg.com/564x/20/f3/05/20f305e5eb0fd54907f9e723a6acd9f2.jpg", "Enano Montado", "Geniales miniaturas para darles vida a tus personajes.");
let figuraXanathar = new Producto(2 ,"https://i.pinimg.com/564x/7c/84/83/7c8483ab7a9338a0920ef92fa4f62e28.jpg", "Xanathar's", "Geniales miniaturas para darles vida a tus personajes.");
let figuraEnanoGuerrero = new Producto(3 ,"https://i.pinimg.com/564x/15/af/ff/15affff9c3dc6c5e70fa58543e2d65cd.jpg", "Enano Guerrero", "Geniales miniaturas para darles vida a tus personajes.");
let figuraTrasgo = new Producto(4 ,"https://i.pinimg.com/564x/3e/13/f1/3e13f14f3d8097810f172b7205243506.jpg", "Trasgo", "Geniales miniaturas para darles vida a tus personajes.");
let figuraDesuellaMentes = new Producto(5 ,"https://i.pinimg.com/564x/02/a8/35/02a8354f5df804f54cb6f670cba6d8ff.jpg", "Desuellamentes", "Geniales miniaturas para darles vida a tus personajes.");
let figuraMujerLagarto = new Producto(6 ,"https://i.pinimg.com/564x/59/c1/a0/59c1a0cfa0cd44163e442b773cc241db.jpg", "Mujer Lagarto", "Geniales miniaturas para darles vida a tus personajes.");

productosFiguras.push(figuraDesuellaMentes, figuraEnanoGuerrero, figuraEnanoMontado, figuraMujerLagarto, figuraTrasgo, figuraXanathar);

let contenedorItems = document.getElementById ('contenedorItems');

let mostrarProductos = (categoria) =>{
    let contenidoDeCategoria = "";
    categoria.forEach(producto => {
        contenidoDeCategoria += `
            <div id="${producto.idProducto}">
                <div class="card text-center articulo">
                <img src="${producto.imgProducto}" class="card-img-top" alt="${producto.nombreProducto}">
                    <div class="card-body ">
                        <h5 class="card-title">${producto.nombreProducto}</h5>
                        <p class="card-text">${producto.descripcionProducto}</p>
                        <a href="#" class="btn btn-primary" data-id="5">Añadir al carrito</a>
                    </div>
                </div>
            </div>
        `;
    });
    contenedorItems.innerHTML += contenidoDeCategoria;
}

mostrarProductos(productosDados);
mostrarProductos(productosFiguras);