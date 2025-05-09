import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
const element=(
  <a href="https://google.com" target ='_blank'>visit google</a>
)
createRoot(document.getElementById('root')).render(
  
   
   reactElement
  
  
    //<App />
)
//we use {variable} here which makes it evaluated expression
 