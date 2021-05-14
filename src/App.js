import React from 'react'
import './App.css'
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FunCat from './components/FunCat'
import Promotion from './components/Promotion'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Logout from './components/Logout'
import { GlobalStore } from './components/GlobalStore'
import Profile from './components/Profile'
import CatAdoptionDetail from './components/CatAdoptionDetail'



const App = () => {
  return (
    <>
    <Router> 
      <GlobalStore> 
      <div>
        <NavBar />

        <div className='container'>
          <Switch>
          <Route path='/' exact component={ Home }  />
          <Route path='/home' exact component={ Home }  />
          <Route path='/funcat' component={ FunCat }  />
          <Route path='/promotion' exact component={ Promotion }  />
          <Route path='/promotion/:slug' component={ CatAdoptionDetail }  />
          <Route path='/about' component={ About }  />
          <Route path='/register' component={ Register }  />
          <Route path='/login' component={ Login }  />
          <Route path='/logout' component={ Logout }  />
          <Route path='/profile' component={ Profile }  />
          <Route path='*' component={ NotFound } />
          </Switch>

        </div>

      </div>

      </GlobalStore>
      
      </Router>
    </>
  )
}

export default App
