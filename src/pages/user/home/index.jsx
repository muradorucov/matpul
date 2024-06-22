import React from 'react'
import Slider from '../../../components/user/slider'
import Products from '../../../components/user/products'

function Home() {
    return (
        <main>
            <div data-aos="zoom-in"  data-aos-duration="1500">
                <Slider />
            </div>
            <Products />
        </main>
    )
}

export default Home