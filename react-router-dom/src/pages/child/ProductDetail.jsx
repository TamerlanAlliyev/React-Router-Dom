import React from 'react'
import { useParams } from 'react-router-dom'
import product from '../../data/data.json'

function ProductDetail() {
  const parms = useParams()
  console.log(parms)
  return (
    <div>
      {
        product.map(product => {
          if (product.id === parseInt(parms.id)) {
            return (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            )
          }
          return null;
        })
      }
    </div>
  )
}

export default ProductDetail
