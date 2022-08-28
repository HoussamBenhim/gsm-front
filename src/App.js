import './assets/css/index.css'
import SignUp from './pages/SignUp'

function App() {
  console.log(
    'process.env.REACT_APP_BASE_URL : ' + process.env.REACT_APP_BASE_URL
  )
  return (
    <>
      <SignUp />
    </>
  )
}

export default App
