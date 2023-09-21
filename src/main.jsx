import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import './index.css'
import Layout from './Layout'
import User from './Component/User/User'
import Github from './Component/Github/Github'
import { githubInfoLoader } from './Component/Github/Github'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element : <Layout/>,
//     children : [
//      
//       {
//         path:'about',
//         element : <About/>
//       },
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader={githubInfoLoader} path='Github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
