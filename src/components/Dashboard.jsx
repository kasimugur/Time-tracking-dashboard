import { useEffect, useState } from 'react'
import '../style.scss'
import { iconEllipsis, iconExercise, iconPlay, iconSelfCare, iconSocial, iconStudy, iconWork } from '../pages/Page'
export default function Dashboard() {
  const [dates, setDates] = useState("weekly")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('src/data.json').then(res => res.json()).then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  return (
    <>
      <div className="container" >
        <div className="btn">
          <div className="card" onSubmit={(e) => e.preventDefault()} >
            <div className="header" >
              <img className="img-prf" src="src/images/image-jeremy.png" alt="profilo" />
              
              <div className="header-item">
              <span>Report for</span>
              <h1>Jeremy Robson</h1>
              </div>
            </div >
          </div>
          <div className="butn">

            <button onClick={() => setDates("daily")} href="">Daily</button>
            <button onClick={() => setDates("weekly")} href="">Weekly</button>
            <button onClick={() => setDates("monthly")} href="">Monthly</button>
          </div>
        </div>
        <div className="card-item">


          <div className="card-work">
            <span>
              {iconWork}
            </span>
            <div className="info">
              <div className="head">
                <h4>Work </h4> <span>{iconEllipsis} </span>
              </div>
              <div className="box">
                
              <h1>{data.map(e => e.title === "Work" && e.timeframes[dates].current)}hrs </h1>
              <span>Last Week - {data.map(e => e.title === "Work" && e.timeframes[dates].previous)}hrs</span>
              </div>
            </div>
          </div>
          <div className="card-play">
            <span>
              {iconPlay}
            </span>
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <div className="box">
                
              <h1>{data.map(e => e.title === "Play" && e.timeframes[dates].current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Play" && e.timeframes[dates].previous)}hrs</span>
              </div>
            </div>
          </div>
          <div className="card-study">
            <span>
              {iconStudy}
            </span>
            <div className="info">
              <div className="head">
                <h4>Study</h4><span>{iconEllipsis} </span>
              </div>
              <div className="box">
                
              <h1>{data.map(e => e.title === "Study" && e.timeframes[dates].current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Study" && e.timeframes[dates].previous)}hrs</span>
              </div>
            </div>
          </div>
          <div className="card-exercise">
            <span>
              {iconExercise}
            </span>
            <div className="info">
              <div className="head">
                <h4>Exercise</h4><span>{iconEllipsis} </span>
              </div>
              <div className="box">
                
              <h1>{data.map(e => e.title === "Exercise" && e.timeframes[dates].current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Exercise" && e.timeframes[dates].previous)}hrs</span>
              </div>
            </div>
          </div>
          <div className="card-social">
            <span>
              {iconSocial}
            </span>
            <div className="info">
              <div className="head">
                <h4>Social</h4><span>{iconEllipsis} </span>
              </div>
              <div className="box">
                
              <h1>{data.map(e => e.title === "Social" && e.timeframes[dates].current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Social" && e.timeframes[dates].previous)}hrs</span>
              </div>
            </div>
          </div>
          <div className="card-selfcare">
            <span>
              {iconSelfCare}
            </span>
            <div className="info">
              <div className="head">
                <h4>Self Care</h4><span>{iconEllipsis} </span>
              </div>
              <div className="box">
                
              <h1>{data.map(e => e.title === "Self Care" && e.timeframes[dates].current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Self Care" && e.timeframes[dates].previous)}hrs</span></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}