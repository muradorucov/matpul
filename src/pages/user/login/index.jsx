import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usersApi } from '../../../services/base'
import { useDispatch } from 'react-redux'
import { getUserDataAction } from '../../../redux/actions/userdata.actions'

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const dis = useDispatch()
    const loginUser = (e) => {
        e.preventDefault()
        usersApi.loginUser()
            .then(res => {
                if (res.status === 200) {
                    let foundUser = res.data.find(user => user.email === loginData.email
                        && user.password === loginData.password)
                    if (foundUser) {
                        dis(getUserDataAction(foundUser))
                        alert("Login olundu")
                    } else {
                        alert("EMail ve ya Password yanlishdir")
                    }
                }
            })
    }
    return (
        <section id='products'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-7 contact-form">
                        <form onSubmit={loginUser}>
                            <input type="email" placeholder='Your email address ....' required
                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                            <br />
                            <input type="password" placeholder='Passworddddd ....' required
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                            <br />
                            <input type="submit" value="Sign IN" />
                            <br />
                        </form>
                        <Link to={"/register"}>Register</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login