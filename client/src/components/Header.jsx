import React from 'react'

export default function Header() {
  return (
    <header>
        <h1 className='font-bold text-sm sm:test-xl flex flex-wrap'>
            <span className='text-slate-500'>Metro</span>
            <span className='text-slate-700'>Cube</span>
        </h1>
        <form>
            <input type='text' placeholder='Search...'/> 
        </form>
    </header>
  )
}
