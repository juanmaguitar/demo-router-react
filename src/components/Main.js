import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './Main.css'

import Home from './routes/root/Home'
import Roster from './routes/root/Roster'
import Schedule from './routes/root/Schedule'

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </div>

)

export default Main