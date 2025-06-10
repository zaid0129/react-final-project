import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './Index'
import Login from './Login'
import SignupPage from './SignupPage'
import Showcart from './Showcart'






function App() {

  return (
    <>
<Routes>
<Route index element={<Index/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signuppage' element={<SignupPage/>}/>
<Route path='/showcart' element={<Showcart/>}/>

</Routes>


    </>
  )
}

export default App
