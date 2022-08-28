import React from 'react'
import { ReactComponent as Duck } from '../assets/images/logo-duck.svg'
import LogoName from '../assets/images/Ducket-Logo.png'

export default function Logo() {
  return (
    <>
      <div className=' flex items-center justify-center'>
        <div className='w-40 h-24'>
          <img src={LogoName} alt='Ducket' className='w-full '></img>
        </div>
      </div>
    </>
  )
}
