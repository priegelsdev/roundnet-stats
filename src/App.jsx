import React, {useState, useEffect} from 'react'

import playerData from './assets/data'
import Card from './Card'


/* function openModal(playerName) {
  console.log(playerName)
}  */

export default function Main() {
  const playerNames = playerData.map(player => 
    <h4 onClick={showStats} id={player.id}>{player.name}</h4>)

  // create array of html/jsx elements to be rendered onto display
  const playerStats = playerData.map(player => {
    return (
      <Card 
        key={player.id}
        {...player}
      />
    )
  })

  /* LOGIC TO BE IMPLEMENTED
    - when click on name, get card shown
    - show specific card fitting the player
    - render modal to screen

    - USE FILTER??
    --> show card for specific player! not all cards!
  */

  const [modal, setModal] = useState()

  function showStats(player) {
    setModal(document.querySelector('.card-container').classList.toggle('hidden'))
  }


  return(
    <div>
      <header>
        <h1>ROUNDNET STATS</h1>
      </header>

      <main>
        <div class="player-container">
          {playerNames}
          <button onClick={showStats} className="test">test me</button>
        </div>
          {playerStats}
      </main>
    </div>
  )
}
