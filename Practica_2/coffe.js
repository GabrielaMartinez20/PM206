const productos = [
    {nombre: "Producto 1", descripcion:"##"},
    {nombre: "Producto 2", descripcion:"##"},
    {nombre: "Producto 3", descripcion:"##"}
];
const pedidos = [
    {nombre: "Pedido 1", cantidad:"2"},
];
    
console.log(`¿Qué acción deseas realizar?
1. Consultar productos
2. Realizar un pedido 
3. Consultar pedidos`)

let index;
if (index == 1)
{
    console.table(`Productos disponibles: 
        ${productos}`)
}
if (index == 2) {
    //Crear pedido de productos
    function agregarProducto (producto) {
        productos.push(producto);
    }
} 
if (index == 3) 
    {
        console.log(`Pedidos Reaizados:
            ${pedidos}`) 
    }
