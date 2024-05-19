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

function App() {
  productsApi.getAllProduct()
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<Home />} index />
          <Route element={<Detail />} path=':id' />
          <Route element={<Search />} path='search' />
          <Route element={<Contact />} path='contact' />
          <Route element={<Login />} path='login' />
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