//Mostrar menu dinamico
//Promociones 
function listarPromociones() {

    console.log("\nPromociones del Día:");

    promociones.forEach(promocion => {
        console.log(`${promocion.id} - ${promocion.nombre}`);
    });

}

//Productos disponibles 
function listarProductos() {

    console.log("\nProductos Disponibles:");

    productos.forEach(producto => {
        console.log(`${producto.id} | ${producto.nombre}`);
    });

}