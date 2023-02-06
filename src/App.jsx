import React, {useState, useEffect} from 'react'

import playerData from './data'
import Player from './Player'
import SelectScreen from './SelectScreen'

export default function Main() {
  // defining state for the currently selected player to be shown in a modal 
  const [player, setPlayer] = useState({})

  // function to show player page/stats
  function showStats(id) {
    setPlayer(playerData[id - 1])
  }

  // function to return to main page
  function backClick() {
    setPlayer({})
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
      notablePartners = {player.notablePartners}
      backClick = {backClick}
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
        <div className="select-container">
          <SelectScreen 
            onClick={showStats} 
          />
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