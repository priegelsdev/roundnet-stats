import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

export default function Player(props) {

  const data = [
    { stat: 'Serving', A: `${props.serving}`*10},
    { stat: 'Receiving', A: `${props.serveReceiving}`*10},
    { stat: 'Setting', A: `${props.setting}`*10},
    { stat: 'Hitting', A: `${props.hitting}`*10},
    { stat: 'Short Defense', A: `${props.shortDefense}`*10},
    { stat: 'Long Defense', A: `${props.longDefense}`*10},
  ];

  return (

    <div className="card-container" data-player={props.id}>

      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis />
        <Radar name={props.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
        <Tooltip />
      </RadarChart>

      <div className="card-details">
        <h3 className="card-name">{props.name}</h3>

        <div className="card-stats">
          <span className="serving">Serving: {props.serving}</span>
          <span className="serve-receiving">Serve Receiving: {props.serveReceiving}</span>
          <span className="setting">Setting: {props.setting}</span>
          <span className="hitting">Hitting: {props.hitting}</span>
          <span className="defense">Defense: {(props.shortDefense + props.longDefense) / 2}</span>
        </div>

        <div className="card-individuals">
          <p className="strengths">Strengths: {props.strengths}</p>
          <p className="weaknesses">Weaknesses: {props.weaknesses}</p>
          <p className="partners">Notable partners: {props.notablePartners}</p>
        </div>
      {/* figure out way to add notes independantly */}
      {/* <p className="card-note">Note: {props.note}</p> */}
      </div>

    </div>
  )

}