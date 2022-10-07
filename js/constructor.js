class Productos{
    constructor(nombre, precio, stock){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = stock
    }
}

const productosA = new Productos("Monitor", 87000, 20)
const productosB = new Productos("Sillas", 80000, 20)
const productosC = new Productos("Teclados", 12000, 20)

const misProductos = [productosA, productosB, productosC]
