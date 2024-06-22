import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Search() {
    const [value, setValue] = useState("")
    const handleNav = useNavigate()
    const getHandleSearch = (e) => {
        e.preventDefault()
        if (value.length) {
            handleNav(`/search/${value}`)
        }

    }
    return (
        <form onSubmit={getHandleSearch}>
            <input type="search" onChange={(e) => setValue(e.target.value.trim())} />
            <button>Search</button>
        </form>
    )
}

export default Search