const carrito = [
    {
        nombre: "Lenovo ThinkPad",
        description: "Laptop para oficina",
        tipo_producto: "PC portatil",
        modelo: "VG6",
        Precio: {
            minimoVenta: 3000000,
            compra: 1000000
        },
        caracteristicas: {
            dimensiones: {
                alto: "2 cm",
                ancho: "50 cm",
                largo: "30 cm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date("2017-05-02")
            }
        },
        obtenerPrecioCompra: function () {
            return this.Precio.compra
        }
    },
    {
        nombre: "Audifonos",
        description: "Para escuchar tus playlits",
        tipo_producto: "Audifono",
        modelo: "Beat 8",
        Precio: {
            minimoVenta: 1000000,
            compra: 100000
        },
        caracteristicas: {
            dimensiones: {
                alto: "3 cm",
                ancho: "20 cm",
                largo: "0.5 cm"
            },
            fabricacion: {
                pais: "Colombia",
                fecha: new Date("2018-08-09")
            }
        },
        obtenerPrecioCompra: function () {
            return this.Precio.compra
        }
    },
    {
        nombre: "krono",
        description: "Tablet de AR",
        tipo_producto: "Tablet",
        modelo: "MC4",
        Precio: {
            minimoVenta: 2000000,
            compra: 200000
        },
        caracteristicas: {
            dimensiones: {
                alto: "20 cm",
                ancho: "3 cm",
                largo: "30 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date("2020-10-12")
            }
        },
        obtenerPrecioCompra: function () {
            return this.Precio.compra
        }
    },
    {
        nombre: "xbox series s",
        description: "consola de mesa",
        tipo_producto: "consola",
        modelo: "MHFR4",
        Precio: {
            minimoVenta: 2500000,
            compra: 2000000
        },
        caracteristicas: {
            dimensiones: {
                alto: "10 cm",
                ancho: "50 cm",
                largo: "40 cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date("2021-10-02")
            }
        },
        obtenerPrecioCompra: function () {
            return this.Precio.compra
        }

    }

]

//filter recorre el arreglo buscando elementos 
//       que concuerden con la condicional 
//       establecida en el filtro 
//       creando un nuevo arreglo con los
//       objetos que cumple dicho 

//let productoTaiwan = carrito.filter((producto) => {
    //return producto.caracteristicas.fabricacion.pais === `Taiwan`
//})
//console.log(productoTaiwan)


//recorer carrito de compras
 
for (let producto of carrito) {
    console.log(producto.nombre),
        console.log(producto.tipo_producto),
        console.log(producto.modelo),
        console.log(producto.caracteristicas.dimensiones.largo),
        console.log(producto.caracteristicas.fabricacion.pais),
        console.log("------------------")
}

let inventario = carrito.reduce((total, producto) =>
    total + producto.obtenerPrecioCompra()
    , 0)


console.log(
    carrito.filter(elemento => elemento.caracteristicas.fabricacion.pais === "China")
)

console.log(
    carrito.filter(elemento => elemento.caracteristicas.dimensiones.alto === "2 m")
)

console.log(
    carrito.filter(elemento => elemento.Precio.minimoVenta < 10000 )
)




//metodo de transformacion map 
//let preciosCompra = carrito.map ((producto)=> {
//return producto.Precio.compra})

//console.log(preciosCompra)


//ejectutar el metodo de obtener 
//console.log(carrito[0].obtenerPrecioCompra())



//imprimir nombre: 
//console.log(carrito[0].caracteristicas.dimensiones.ancho)

// let total = 0
// carrito.forEach(producto => {
//     total += producto.Precio.compra
// })

// console.log(`el valor de inventario es:${total}`)
// //utilizando el method 
// console.log(`el valor de inventario es:${inventario}`)


