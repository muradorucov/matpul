import axios from "axios"
let productsUrl = import.meta.env.VITE_PRODUCTS_API
let usersUrl = import.meta.env.VITE_USERS_API

export const productsApi = {
    getAllProduct: async function () {
        return (await axios.get(productsUrl)).data

    },
    addProduct: function (param) {
        axios.post(productsUrl, param)
    },
    getSingleProduct: async function (id) {
        return (await axios.get(`${productsUrl}/${id}`)).data
    },
    getSearchProduct: async function (title) {
        try {
            let res = (await axios.get(`${productsUrl}?title=${title}`))
            return res

        } catch (error) {
            return error.response
        }
    }
}

export const usersApi = {
    loginUser: async function ({ email, password }) {
        try {
            let res = await axios.get(`${usersUrl}?email=${email}&password=${password}`)
            return res
        } catch (error) {
            return error.response
        }
    },
    registerUser: async function (userData) {
        try {
            let res = await axios.post(usersUrl, userData)
            return res
        } catch (error) {
            return error.response
        }
    },
}