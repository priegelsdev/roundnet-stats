export default function Card(props) {

  return (
    <div className="card-container hidden" data-player={props.id}>
      
      <img className="card-graphic" src="https://via.placeholder.com/150" alt="info graphic"/>
      
      <div className="card-details">
        <h3 className="card-name">{props.name}</h3>
        <div className="card-stats">
          <span className="serving">Serving: {props.serving}</span>
          <span className="serve-receiving">Serve Receiving: {props.serveReceiving}</span>
          <span className="setting">Setting: {props.setting}</span>
          <span className="hitting">Hitting: {props.hitting}</span>
          <span className="defense">Defense: {(props.defense.short + props.defense.long) / 2}</span>
        </div>
        <div className="card-individuals">
          <p className="strengths">Strengths: {props.strengths}</p>
          <p className="weaknesses">Weaknesses: {props.weaknesses}</p>
          <p className="partners">Notable partners: {props.notablePartners}</p>
        </div>
        <p className="card-note">Note: {props.note}</p>
      </div>

    </div>
  )

}