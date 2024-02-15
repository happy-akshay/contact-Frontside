import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Create from './Pages/Create'
import CreateUpdated from './Pages/CreateUpdated'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/createpage' element={<Create/>}/>
        <Route exact path='/createpage/:id' element={<Create/>}/>
        <Route exact path='/updatedpage/:id' element={<CreateUpdated/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
