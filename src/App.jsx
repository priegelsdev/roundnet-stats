import React, {useState, useEffect} from 'react'

import playerData from './data'
import Card from './Card'

export default function Main() {
  // defining state for the currently selected player to be shown in a modal 
  const [player, setPlayer] = useState({})

  const playerNames = playerData.map(player => 
    <h4 
      onClick={() => showStats(player.id)} 
      key={player.id}
      id={player.id}
    >{player.name}
    </h4>)

  // function to show player page/stats
  function showStats(id) {
    console.log(playerData[id - 1])
    setPlayer(playerData[id - 1])
  }

  return (
    <div className="app-container">
      <header>
        <h1>ROUNDNET STATS</h1>
      </header> 

      <main>
        {Object.keys(player).length === 0 && 
        <div className="player-container">
          {playerNames}
        </div>}

        {Object.keys(player).length > 0 &&
        <div>
          Test  
        </div>}
      </main>
    </div>
  )
}