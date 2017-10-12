import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getPlayers } from '../../../services/api'

class FullRoster extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    getPlayers()
      .then( players => {
        this.setState({ players })
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.players.map( (player, i) => (
              <li key={i}>
                <Link to={`/roster/${player.number}`}>{ player.name }</Link>
              </li>
          ))
        }
      </ul>
    )
  }
}

export default FullRoster