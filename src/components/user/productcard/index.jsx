import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

import { FaCodeCompare } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../../redux/actions/cartList.actions';

function ProductCard(props) {
    let { title, images, price, color, ram, rom, cpu, screen } = props.product
    const dispatch = useDispatch()
    function addToCart() {
        dispatch(addToCartAction(props.product))
    }
    return (
        <div className='product'>
            <div className="icons">
                <MdFavoriteBorder />
                <BsCartPlusFill onClick={addToCart} />
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