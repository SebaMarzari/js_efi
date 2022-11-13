import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { dataProducts } from "../../data/products";
import { Descriptions, Button, Input } from 'antd';
import "./Product.css"
const { Item } = Descriptions;
const Product = () => {
    const { id } = useParams();
    const [ input, setInput ] = useState(1);
    const productData = dataProducts.find((product) => product.id === id);
    
    const handleInput = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setInput(e.target.value)
        } else {
            alert("No se permiten letras")
        }
    }
    const handleClick = () => {
        if (input > productData.quantity) {
            alert('No hay suficientes productos')
        } else {
            alert('Compra exitosa')
        }
    }
    return (
        <div className="productStyle">
            <img src={productData.image} alt={productData.description} />
            <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
                <Descriptions bordered>
                    <Item label="Nombre del producto">{productData.title}</Item>
                </Descriptions>
                <Descriptions bordered>
                    <Item label="Descripcion">{productData.description}</Item>
                </Descriptions>
                <Descriptions bordered>
                    <Item label="Precio">{productData.price}</Item>
                </Descriptions>
                <Input value={input} placeholder="Cantidad" onChange={e => handleInput(e)} />
                <Button type="primary" style={{ margin: "auto" }} onClick={() => handleClick()}>Comprar</Button>
            </div>
        </div>
    )
};
export default Product;