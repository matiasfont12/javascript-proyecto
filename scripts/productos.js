let bienvenida = alert("Bienvenido a nuestro catalogo")

class Productos{
    constructor(nombre, precio, stock){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = stock
    }
}

const productosA = new Productos("Monitor", 87000, 5)
const productosB = new Productos("Sillas", 80000, 5)
const productosC = new Productos("Teclados", 12000, 5)

const misProductos = [productosA, productosB, productosC]

const verStock = misProductos.map( (elements) =>{
    return{
        nombre: elements.nombre,
        precio: elements.precio
    }
})

console.log(verStock)
