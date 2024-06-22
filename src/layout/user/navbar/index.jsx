import React, { useState } from 'react'
import { useEffect } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import scroolToTop from '../../../provider/scroolToTop'
import Search from '../../../components/user/search'

function Navbar() {
    const [result, setResult] = useState(0)
    const { cartList, userData } = useSelector(state => state)
    useEffect(() => {
        setResult(cartList.reduce((acc, item, index, arr) => {
            return acc += item.count
        }, 0))
    }, [cartList])
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="logo">MatPul</h2>
                <ul className="menu d-flex">
                    <li>
                        <Link to={"/"} onClick={() => scroolToTop()}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} onClick={() => scroolToTop()}>Contact</Link>
                    </li>
                </ul>
                <div className='d-flex align-items-center'>
                    <Search />
                    <div className="basket">
                        <Link to="/cart" onClick={() => scroolToTop()}>
                            <IoCartOutline />
                            {
                                cartList.length ? <span>{result}</span> : null
                            }
                        </Link>
                        <Link to="/favorite" onClick={() => scroolToTop()}>
                            <MdOutlineFavoriteBorder />
                        </Link>
                    </div>
                    <Link to={`${Object.keys(userData).length ? "/profile" : "/login"}`}>
                        <div className='profile-card'>
                            <img src={
                                userData.avatar ? userData.avatar : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                            } alt="" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar