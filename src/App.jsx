import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/user'
import AdminLayout from './layout/admin'
import Home from './pages/user/home'
import Detail from './pages/user/detail'
import Contact from './pages/user/contact'
import Dashboard from './pages/admin/dashboard'
import Products from './pages/admin/products'
import Users from './pages/admin/users'
import Search from './pages/user/search'
import Login from './pages/user/login'
import { productsApi } from './services/base'
import Cart from './pages/user/cart'
import Favorite from './pages/user/favorite'
import Register from './pages/user/register'
import Profile from './pages/user/profile'
import { useSelector } from 'react-redux'
import NotFound from './pages/user/NotFound'

function App() {
  const { userData } = useSelector(state => state)

  productsApi.getAllProduct()
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<Home />} index />
          <Route element={<Detail />} path='product/:id' />
          <Route element={<Search />} path='search/:title' />
          <Route element={<Contact />} path='contact' />
          <Route element={<Cart />} path='cart' />
          <Route element={<Favorite />} path='favorite' />
          <Route element={<Login />} path='login' />
          <Route element={<Register />} path='register' />
          {
            Object.keys(userData).length ? <Route element={<Profile />} path='profile' /> : null
          }
          <Route element={<NotFound />} path='*' />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route element={<Dashboard />} index />
          <Route element={<Products />} path='products' />
          <Route element={<Users />} path='users' />
        </Route>
      </Routes>
    </>
  )
}

export default App