import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-dark text-white px-4 py-5 d-flex flex-column gap-3' style={{
        height: "calc(100vh - 56px)"
    }}>
        <Link to='/products' className='text-light' style={{textDecoration:"none"}}>get all products</Link>
        <Link to='/categorys' className='text-light' style={{textDecoration:"none"}}>get all categorys</Link>
    </div>
  )
}

export default SideBar