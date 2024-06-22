import React from 'react'
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import { FaCodeCompare } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../../../redux/actions/cartList.actions';
import { CiShoppingCart } from 'react-icons/ci';
import { addToFavAction, removeFromFavAction } from '../../../redux/actions/favList.actions';
import { BsCart3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function ProductCard(props) {
    let { id, title, images, price, color, ram, rom, cpu, screen } = props.product
    const dispatch = useDispatch()
    const { favList, userData } = useSelector(state => state)
    function addToCart() {
        dispatch(addToCartAction(props.product))
    }
    const changeNav = useNavigate()

    return (
        <div className='product' data-aos="fade-up" data-aos-duration="1500">
            <div className="icons">
                {
                    favList.find(item => item.id === id) ?
                        <MdOutlineFavorite onClick={() => dispatch(removeFromFavAction(id))} />
                        : <MdFavoriteBorder onClick={() => Object.keys(userData).length ? dispatch(addToFavAction(props.product)) : changeNav("/login")} />

                }
                <BsCart3 onClick={addToCart} />
                <FaCodeCompare />
            </div>
            <img src={images[0]} alt={title} />
            <Link to={`/product/${id}`}>
                <h3 title={title}>{title} {ram}/{rom} {color}</h3>
            </Link>

            <p className='discount-price'>{Number(price.split(".").join("").replace(",", ".")) + 150} ₼</p>
            <p className='price'>{price.split(".").join("").replace(",", ".")} ₼</p>

        </div>
    )
}

export default ProductCard