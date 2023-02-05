import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

export default function Player(props) {

  const data = [
    { stat: 'Serving', A: `${props.serving}`*10},
    { stat: 'Receiving', A: `${props.serveReceiving}`*10},
    { stat: 'Setting', A: `${props.setting}`*10},
    { stat: 'Hitting', A: `${props.hitting}`*10},
    { stat: 'Short Defense', A: `${props.shortDefense}`*10},
    { stat: 'Long Defense', A: `${props.longDefense}`*10},
  ]

  return (

    <div className="card-container" data-player={props.id}>

      <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis 
          angle={90} 
          domain={[0, 100]} 
          tick={
            ({ x, y, payload }) => (
              <g transform={`translate(${x + 15},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="black">{payload.value}</text>
              </g>
            )
          }
        />
        <Radar 
          name={props.name} 
          dataKey="A" 
          stroke="#8884d8" 
          fill="green" 
          fillOpacity={0.6} 
          dot={{ fill: 'white' }}  
        />
        <Tooltip />
      </RadarChart>

      <div className="card-details">
        <h3 className="card-name">{props.name}</h3>

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