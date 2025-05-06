import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/contactUs/ContactUs.jsx'
import Layout from './Layout.jsx'
import Github, { git } from './components/Github/Github.jsx'
// const router=createBrowserRouter([
//   {
// path:'/',
// element:<Layout/>,

//   children:[
//   {
//     path:'about',
//     element:<About/>

//   },
//   {
//     path:'',
//     element:<Home/>

//   },
//   {
//     path:'contactUs',
//     element:<Contact/>

//   }

// ]
// }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contactUs' element={<contactUs/>}/>
      <Route path='/:userId' element={<User/>}/>
      <Route 
      
      path='/github' 
      element={<Github/>}
      loader={git}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
