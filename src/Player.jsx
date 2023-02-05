import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as fasCircle, faInfo as fasInfo } from '@fortawesome/free-solid-svg-icons'
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

        <div className="card-individuals">
          <p className="strengths">Strengths: {props.strengths}</p>
          <p className="weaknesses">Weaknesses: {props.weaknesses}</p>
          <p className="partners">Notable partners: {props.notablePartners}</p>
        </div>

      </div>

      <div className="buttons-container">
        <button className="info-btn player-btn"><FontAwesomeIcon icon={fasInfo} /></button>
        <button className="edit-player-btn player-btn"><FontAwesomeIcon icon={fasPen} /></button>
      </div>

    </div>
  )

}