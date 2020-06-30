import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Productos(props) {
    const [productoDet, setProductos] = useState({ producto: [] });
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Mieczys/repo/productos/${props.match.params.id}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setProductos({ ...productoDet, producto: data })
                console.log(productoDet)
                this.handleOnClick = this.handleOnClick.bind(this)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    /*   return (
           <Header />
       );*/
    return (
        <>
            <Header />
            <div>
                <div className='grid2'>
                    <div>
                        <img src={productoDet.producto.imagen} alt={productoDet.producto.nombre} className='produs' />
                        <h2>{productoDet.producto.nombre}</h2>
                        <p>{productoDet.producto.descripcion}</p>
                        <p id='precio'>${productoDet.producto.precio}</p>
                        <button className='buttondet'>
                            Comprar</button>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Productos;

