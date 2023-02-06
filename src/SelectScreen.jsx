import playerData from "./data"

export default function SelectScreen(props) {

  const playerNames = playerData.map(player => 
    <h4 
      onClick={() => props.onClick(player.id)} 
      key={player.id}
      id={player.id}
    >{player.name}
    </h4>
  )

  return (
    <>
      <form>
        <input className="search-bar" placeholder="Search"></input>
      </form>
      <div className="player-container">
        {playerNames}
      </div>
      <div className="select-buttons-container">
        <button className="select-edit-btn">EDIT</button>
        <button className="select-add-btn">ADD</button>
      </div>
    </>
  )
}