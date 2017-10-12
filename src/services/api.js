const players = [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
]

export const getPlayers = () => {
  return new Promise( (resolve, reject) => {
    resolve(players)
  })
}

export const getPlayerById = idPlayer => {
  return new Promise( (resolve, reject) => {
    const isPlayer = p => p.number === idPlayer
    resolve(players.find(isPlayer))
  })
}