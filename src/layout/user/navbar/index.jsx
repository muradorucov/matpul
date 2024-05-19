import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-between">
                <h2 className="logo">MatPul</h2>
                <ul className="menu d-flex">
                    <li>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} >Contact</Link>
                    </li>
                    <li>
                        <Link to={"/login"} >Login</Link>
                    </li>
                </ul>
                <form >
                    <input type="search" name="" id="" />
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar