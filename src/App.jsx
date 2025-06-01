import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './Index'
import Login from './Login'



function App() {

  return (
    <>
<Routes>
<Route index element={<Index/>}/>
<Route path='/login' element={<Login/>}/>

</Routes>


    </>
  )
}

export default App
