import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usersApi } from '../../../services/base'
import { useRef } from 'react'
let cloudApi = import.meta.env.VITE_CLOUD_API
let cloudName = import.meta.env.VITE_CLOUD_NAME
let cloudPReset = import.meta.env.VITE_CLOUD_PRESET

function Register() {
    const [file, setFile] = useState(null)
    const fullName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const nav = useNavigate()
    const registerUser = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', cloudPReset);

        axios.post(`${cloudApi}/${cloudName}/upload`, formData)
            .then(res => {
                console.log(res)
                usersApi.registerUser({
                    fullName: fullName.current.value,
                    email: email.current.value,
                    password: password.current.value,
                    avatar: res.data.url
                }).then(res => {
                    if (res.status === 201) {
                        alert("Qeydiyyat Tamamlandı")
                        fullName.current.value = ""
                        email.current.value = ""
                        password.current.value = ""
                        nav("/login")
                    } else {
                        alert(res.statusText)
                    }
                })
            })

    }
    return (
        <section id='products'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-7 contact-form">
                        <form onSubmit={registerUser}>
                            <input type="text" placeholder="FuLL Name" required ref={fullName} />
                            <br />
                            <input type="email" placeholder='Email ....' required ref={email} />
                            <br />
                            <input type="password" placeholder='Passworddddd ....' required ref={password} />
                            <br />
                            <input type="file" required onChange={(e) => setFile(e.target.files[0])} />
                            <br />
                            <input type="submit" value="Sign Up" />
                            <br />
                        </form>
                        <Link to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register