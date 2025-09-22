import React from 'react'
import { ExpandableCardDemo } from './ui/expandablecard'

const Events = () => {
  return (
    <>
    <div className='bg-black min-h-screen'>
        <h1 className='text-white text-xl md:text-3xl font-semibold text-center mb-10 '>Events We do</h1>
        <ExpandableCardDemo/>
    </div>
    </>
  )
}

export default Events