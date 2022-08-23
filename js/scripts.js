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

const dataJson = JSON.stringify(misProductos)
console.log(dataJson)

localStorage.setItem("productos", dataJson)

let carritoBoton = document.getElementsByTagName()
carritoBoton.addEventListener("click", mensaje)

const mensaje = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Carrito vacio',
        text: 'No tiene productos en su carrito',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    
}

