import './assets/css/index.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/auth/signin' element={<SignIn />}></Route>
          <Route path='/auth/signup' element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
