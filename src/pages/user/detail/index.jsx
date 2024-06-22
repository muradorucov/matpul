import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { productsApi } from '../../../services/base'

function Detail() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        productsApi.getSingleProduct(id).then(data => setProduct(data))
    }, [id])

    return (
        <div>
            <h1>{product.title}</h1>
            <ul>
                {product.images?.map(img => <li>
                    <img src={img} />
                </li>)}
            </ul>
        </div>
    )
}

export default Detail