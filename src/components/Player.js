import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getPlayerById } from '../services/api'

class Player extends Component {
  constructor() {
    super()
    this.state = {
      player: {}
    }
  }

  componentDidMount() {
    const idPlayer = parseInt(this.props.match.params.idPlayer, 10)
    getPlayerById(idPlayer)
      .then( player => {
        this.setState({ player })
      })
  }

  render() {
    const { player } = this.state
    return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>Position: {player.position}</h2>
        <Link to='/roster'>Back</Link>
      </div>
    )
  }
}


export default Player