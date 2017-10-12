import React from 'react'
import { Switch, Route } from 'react-router-dom'

import FullRoster from '../roster/FullRoster'
import Player from '../roster/Player'

const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:idPlayer' component={Player}/>
    </Switch>
  </div>
)

export default Roster