import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarProductos = (item, cantidad) => {
        const productosExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productosExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev * (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prev => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod;
                }

            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }

    const elimiarProductos = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado))
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoProvider value={{ carrito, agregarProductos, elimiarProductos, vaciarCarrito, total, cantidadTotal }}>
        </CarritoProvider>
    )

}