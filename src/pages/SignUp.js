import { LockClosedIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Alerte from '../components/Alerte'
import Logo from '../components/Logo'
import { validEmail, validPassowrd } from '../utils/Regex.js'
import services from '../services/axios'
export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassorwd, setConfirmPasword] = useState('')
  const [showAlerte, setShowAlerte] = useState(false)
  const [alerteMessage, setalerteMessage] = useState({
    title: '',
    message: '',
    type: ''
  })
  const [register, setRegister] = useState(false)

  useEffect(() => {
    if (register) {
    }
  }, [register])

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
    /*chekc email*/
    console.log(checkEmail(email))
    if (!checkEmail(email)) {
      setalerteMessage({ title: 'Mail invalide!', message: '', type: 'danger' })
      setShowAlerte(true)
    } else if (!checkPassord(password)) {
      /* check password*/
      setalerteMessage({
        message:
          ' \t1-Contenir au moins 8 charactère \t 2-contenir une Majuscule \t 3-Contenir une miniscule \t 4-Contenir un chiffre',
        title: 'Mot de passe invalide :',
        type: 'danger'
      })
      setShowAlerte(true)
    } else if (confirmPassorwd !== password) {
      /* check confirm password*/
      setalerteMessage({
        message: '',
        title: 'Les deux mots de passes ne correspondent pas !',
        type: 'danger'
      })
      setShowAlerte(true)
    }
    /* cas tout est bon*/
    if (
      checkEmail(email) &&
      checkPassord(password) &&
      confirmPassorwd === password
    ) {
      services({
        url: '/registration/signup',
        method: 'post',
        body: JSON.stringify({
          firstName: 'houssam',
          lastName: 'benhim',
          email: email,
          password: password
        })
      })
    }
  }
  const checkEmail = (email) => {
    /* eslint-disable */
    return validEmail.test(email)
    /* eslint-disable */
  }
  const checkPassord = (password) => {
    /* eslint-disable */
    return validPassowrd.test(password)
    /* eslint-disable */
  }

  return (
    <>
      <div className='  min-h-full flex-col m-auto max-w-md items-center justify-center'>
        <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='border-2 border-gray-200 max-w-md w-full space-y-8 p-5 rounded-md'>
            <div>
              <Logo />
              <h2 className='mt-6 text-center text-3xl tracking-tight font-bold text-gray-900'>
                Créez un compte
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
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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
                <div>
                  <label htmlFor='password' className='sr-only'>
                    Confirm Password
                  </label>
                  <input
                    id='password-confirm'
                    name='password-confirm'
                    type='password'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    placeholder='Confirm password'
                    value={confirmPassorwd}
                    onChange={(e) => setConfirmPasword(e.target.value)}
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
                    Vous avez déja un compte?
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
    </>
  )
}
