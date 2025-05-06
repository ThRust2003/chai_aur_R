import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import Home from './components/home/Home'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-600 p-4'>hello</h1>
     <Header></Header>
     <Footer></Footer>
    <Home></Home>
    </>
  )
}

export default App
