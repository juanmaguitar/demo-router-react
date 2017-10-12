import React from 'react'
import { Link } from 'react-router-dom'

import { getPlayers } from '../services/api'

const FullRoster = () => (
  <ul>
    {
      getPlayers().map( (player, i) => (
        <li key={i}><Link to={`/roster/${player.number}`}>{ player.name }</Link></li>
      ))
    }
  </ul>
)

export default FullRoster