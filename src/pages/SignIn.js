import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Alerte from '../components/Alerte'
import Logo from '../components/Logo'
import services from '../services/axios'

import PropTypes from 'prop-types'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlerte, setShowAlerte] = useState(false)
  const [alerteMessage, setalerteMessage] = useState({
    title: '',
    message: '',
    type: ''
  })
  const showAlert = (
    showAlerte = false,
    title = '',
    message = '',
    type = ''
  ) => {
    setalerteMessage({ title, message, type })
    setShowAlerte(showAlerte)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    if (!checkEmail(email)) {
      setalerteMessage({ title: 'Mail invalide!', message: '', type: 'danger' })
      setShowAlerte(true)
    } else if (password && password.length < 8) {
      setalerteMessage({
        title: 'Vérifier le mot de pass!',
        message: '',
        type: 'danger'
      })
      setShowAlerte(true)
    } else if (checkEmail(email) && password && password.length > 8) {
      const response = services({
        _url: '/registration/signup',
        _method: 'post',
        _data: JSON.stringify({
          email: email,
          password: password
        })
      })
      console.log('from SignIn.js : ' + response)
    }
  }
  const checkEmail = (email) => {
    /* eslint-disable */
    return validEmail.test(email)
    /* eslint-disable */
  }
  return (
    <div>
      <div className='  min-h-full flex-col m-auto max-w-md items-center justify-center'>
        <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='border-2 border-gray-200 max-w-md w-full space-y-8 p-5 rounded-md'>
            <div>
              <Logo />
              <h2 className='mt-6 text-center text-3xl tracking-tight font-bold text-gray-900'>
                Inscription
              </h2>
            </div>
            <form className='mt-8 space-y-6' onSubmit={handelSubmit}>
              <input type='hidden' name='remember' defaultValue='true' />
              <div className='rounded-md shadow-sm -space-y-px'>
                <div>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    placeholder='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Vous n'avez pas de compte?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    <LockClosedIcon
                      className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                      aria-hidden='true'
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        {showAlerte && <Alerte {...alerteMessage} showAlert={showAlert} />}
      </div>
    </div>
  )
}

SignIn.propTypes = {}

export default SignIn
