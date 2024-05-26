import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

import { FaCodeCompare } from "react-icons/fa6";

function ProductCard({ title, images, price, color, ram, rom, cpu, screen }) {
    return (
        <div className='product'>
            <div className="icons">
                <MdFavoriteBorder />
                <BsCartPlusFill />
                <FaCodeCompare />
            </div>
            <img src={images[0]} alt={title} />
            <h3 title={title}>{title} {ram}/{rom} {color}</h3>

            <p className='discount-price'>{Number(price.split(".").join("").replace(",", ".")) + 150} ₼</p>
            <p className='price'>{price.split(".").join("").replace(",", ".")} ₼</p>

        </div>
    )
}

export default ProductCard