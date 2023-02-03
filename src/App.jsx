import React, {useState, useEffect} from 'react'

import playerData from './data'
import Player from './Player'

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

  let playerStats

  if (Object.keys(player).length > 0) {
    playerStats = <Player 
      name = {player.name}
      serving = {player.serving}
      serveReceiving = {player.serveReceiving}
      setting = {player.setting}
      hitting = {player.hitting}
      shortDefense = {player.defense.short}
      longDefense = {player.defense.long}
      strengths = {player.strengths}
      weaknesses = {player.weaknesses}
    />
  }

  return (
    <div className="app-container">
      <header>
        <h1>ROUNDNET STATS</h1>
      </header> 

      <main>
        {/* if no player is selected, render player names; potentially create own component with edit and add function*/}
        {Object.keys(player).length === 0 && 
        <div className="player-container">
          {playerNames}
        </div>}
        
        {/* if player is selected, render player component*/}
        {Object.keys(player).length > 0 &&
        <div>
          {playerStats}
        </div>}
      </main>
    </div>
  )
}