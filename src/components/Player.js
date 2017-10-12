import React from 'react'
import { Link } from 'react-router-dom'

import { getPlayerById } from '../services/api'

const Player = props => {
  const idPlayer = parseInt(props.match.params.idPlayer, 10)
  const player = getPlayerById(idPlayer)
  console.log(player);
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Player