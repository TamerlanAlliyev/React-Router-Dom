import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const navigate = useNavigate()
    const { id, name, price } = product
    return (
        <div className='List'>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <button onClick={() => { navigate("/product-detail/" + id) }} >Get Product</button>
        </div>
    )
}

export default Product
