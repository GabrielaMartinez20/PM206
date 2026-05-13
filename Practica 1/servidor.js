console.log("Hola Mundo JS desde el Servidor")

/*OPERACIONES*/
let edad1 = 11
const edad2 = 42

console.log("Edad promedio")
console.log((edad1+edad2)/2)

/*Medir el tiempo de un proceso*/
console.time("miproceso")

    for(let i=0; i < 1000000; i++){}

console.timeEnd("miproceso")

/*Objetos tio tabla*/
let usuarios = [
    {nombre: "Gabi", Edad:23},
    {nombre: "Isaias", Edad:21}
]
console.log(usuarios)