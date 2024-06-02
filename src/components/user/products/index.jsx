import React, { useState, useEffect } from 'react'
import { productsApi } from '../../../services/base'
import ProductCard from '../productcard'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getAllProduct().then(data => setProducts(data))
    }, [])
    return (
        <section id='products'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="section-heading text-center">
                        <p className='subheading'>Xəyalındakı məhsulu buradan tap</p>
                        <h2>Məhsullar</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(item => <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12' key={item.id}>
                            <ProductCard product={item} />
                        </div>)
                    }
                </div>


            </div>
        </section>
    )
}

export default Products