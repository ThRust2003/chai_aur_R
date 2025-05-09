import React from 'react'

function Card({channel,btntxt='8'}) {
  return (
    
    <h1 className='bg-green-600 text-black rounded-2xl p-4'>Card{channel}{btntxt}</h1> //we could also use {btntxt||8}
  )
}

export default Card