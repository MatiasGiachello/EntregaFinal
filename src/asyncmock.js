const misProductos = [
    { id: "1", nombre: "Mate Imperial", precio: 8000, img: "../img/mate1.jpg", idCat: "2" },
    { id: "2", nombre: "Mate Imperial de River", precio: 11000, img: "../img/mate3.jpg", idCat: "2" },
    { id: "3", nombre: "Mate Imperial de Boca", precio: 11000, img: "../img/mate2.jpg", idCat: "2" },
    { id: "4", nombre: "Mate Camionero", precio: 7500, img: "../img/mateCamionero1.jpg", idCat: "3" },
    { id: "5", nombre: "Mate Camionero", precio: 10000, img: "../img/mateCamionero2.jpg", idCat: "3" },
    { id: "6", nombre: "Mate Ceramica", precio: 10000, img: "../img/mateCeramica1.jpg", idCat: "4" },
    { id: "7", nombre: "Termo Stanley", precio: 35000, img: "../img/termo1.jpg", idCat: "5" },
    { id: "8", nombre: "Termos Metalicos", precio: 12000, img: "../img/termometalico.jpg", idCat: "5" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}