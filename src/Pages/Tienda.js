import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Tienda() {
    const [estadoProdus, setProductos] = useState({ productos: [] });
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Mieczys/repo/productos/")
            .then(respuesta => respuesta.json())
            .then(dataProducto => {
                setProductos({ ...estadoProdus, productos: dataProducto })
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <>
            <Header />
            <div>
                <div className='grid'>
                    {estadoProdus.productos.map(producto => <div>
                        <img src={producto.imagen} alt={producto.nombre} className='produs' />
                        <h2>{producto.nombre}</h2>
                        <p id='precio'>AR${producto.precio}</p>
                        <Link to={'/tienda/' + producto.id}><button className='buttondet'>
                            Mas Detalles</button></Link>
                        <div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Tienda;