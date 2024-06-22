import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { productsApi } from '../../../services/base'
import ProductCard from '../../../components/user/productcard'

function Search() {
    const { title } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsApi.getSearchProduct(title).then(res => {
            if (res.status === 200) {
                setProducts(res.data)

            } else {
                setProducts([])
            }


        })
    }, [title])
    return (
        <section id='products'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="section-heading text-center">
                        <h2>{title}</h2>
                        <p className='subheading'>Xəyalındakı məhsulu buradan tap</p>
                    </div>
                </div>
                <div className="row">
                    {
                        products.length ? products.map(item => <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12' key={item.id}>
                            <ProductCard product={item} />
                        </div>) : <p>Nəticə tapılmadı!</p>
                    }
                </div>


            </div>
        </section>
    )
}

export default Search