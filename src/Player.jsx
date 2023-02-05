import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo as fasInfo } from '@fortawesome/free-solid-svg-icons'
import { faPen as fasPen } from '@fortawesome/free-solid-svg-icons'

export default function Player(props) {

  const data = [
    { stat: 'SRV', A: `${props.serving}`*10},
    { stat: 'REC', A: `${props.serveReceiving}`*10},
    { stat: 'SET', A: `${props.setting}`*10},
    { stat: 'HIT', A: `${props.hitting}`*10},
    { stat: 'SDEF', A: `${props.shortDefense}`*10},
    { stat: 'LDEF', A: `${props.longDefense}`*10},
  ]

  return (

    <div className="card-container" data-player={props.id}>

      <h3 className="card-name">{props.name}</h3>

      <RadarChart cx={190} cy={190} outerRadius={170} width={380} height={380} data={data}>
        <PolarGrid 
          stroke="black"
        />
        <PolarAngleAxis 
          dataKey="stat"
          tick={{fill: "black", fontWeight: 'bold'}}
        />
        <Radar 
          name={props.name} 
          dataKey="A" 
          stroke="purple" 
          fill="yellow" 
          fillOpacity={0.6} 
          dot={{ fill: 'white' }}  
        />
        <PolarRadiusAxis 
          stroke="gray"
          angle={90} 
          domain={[0, 100]} 
          tick={
            ({ x, y, payload }) => (
              <g transform={`translate(${x + 15},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="black" fontWeight='bold'>{payload.value}</text>
              </g>
            )
          }
        />
        <Tooltip />
      </RadarChart>

      <div className="card-details">

        <div className="card-individuals">
          <p className="strengths">Strengths: {props.strengths.join(", ")}</p>
          <p className="weaknesses">Weaknesses: {props.weaknesses.join(", ")}</p>
          <p className="partners">Notable partners: {props.notablePartners.join(", ")}</p>
        </div>

      </div>

      <div className="buttons-container">
        <button className="info-btn player-btn"><FontAwesomeIcon icon={fasInfo} /></button>
        <button className="edit-player-btn player-btn"><FontAwesomeIcon icon={fasPen} /></button>
      </div>

    </div>
  )

}