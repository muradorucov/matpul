import React from 'react'
import { useSelector } from 'react-redux'

function Favorite() {

    const { favList } = useSelector(state => state)
    console.log(favList);
    return (
        <div>Favorite</div>
    )
}

export default Favorite