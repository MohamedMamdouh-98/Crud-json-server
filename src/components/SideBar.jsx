import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-dark text-white px-4 py-5 d-flex flex-column' style={{
        height: "calc(100vh - 56px)"
    }}>
        <Link to='/products'>get all products</Link>
        <Link to='/categorys'>get all categorys</Link>
    </div>
  )
}

export default SideBar