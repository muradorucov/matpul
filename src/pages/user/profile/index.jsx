import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserDataAction } from '../../../redux/actions/userdata.actions'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Profile() {
    const { userData } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = () => {
        dispatch(removeUserDataAction())
        navigate("/login")
    }

    return (
        <div>
            <button onClick={logOut}>logOut</button>
            {
                userData.email === "admin@mat.pul" ? <Link to="/admin">Admin Dashboard</Link> : null
            }
            <h1>{userData.fullName}</h1>
            <h1>{userData.email}</h1>
            <img src={userData.avatar} alt="" />
        </div>
    )
}

export default Profile