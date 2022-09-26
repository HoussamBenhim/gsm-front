import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='bg-slate-50'>
      <Link to='/auth/signup'>Sing Up</Link>
      <Link to='/auth/signin'>Sing In</Link>
    </div>
  )
}

export default NavBar
