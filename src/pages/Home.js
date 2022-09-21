import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
function Home() {
  return (
    <Router>
      <div>Nav Bar</div>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </Router>
  )
}

export default Home
