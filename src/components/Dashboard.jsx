import { useEffect, useState } from 'react'
import '../css/style.css'
import { iconEllipsis } from '../pages/Page'
export default function Dashboard() {
  const [daily, setDaily] = useState("daily")
  const [weekly, setWeekly] = useState(null)
  const [monthly, setMonthly] = useState(null)
  const [dates, setDates] = useState("weekly")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('src/data.json').then(res => res.json()).then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  const addClick = () => {
  }
  console.log(dates)
  // console.log(data.map(e => e.title === "Work" && e.timeframes[dates].current))
  return (
    <>
      <div className="container" >
        <div className="card" onSubmit={(e) => e.preventDefault()} >
          <div className="header" >
            <img className="img-prf" src="src/images/image-jeremy.png" alt="profilo" />
            <span>Report for</span>
            <h1>Jeremy Robson</h1>
          </div >
          <button onClick={() => setDates("daily")} href="">Daily</button>
          <button onClick={() => setDates("weekly")} href="">Weekly</button>
          <button onClick={() => setDates("monthly")} href="">Monthly</button>
        </div>
        <div className="card-item">


          <div className="card-work">
            <div className="info">
              <div className="head">
                <h4>Work </h4> <span>{iconEllipsis} </span>
              </div>
              <h1>{data.map(e => e.title === "Work" && e.timeframes.weekly.current)}hrs </h1>
              <span>Last Week - {data.map(e => e.title === "Work" && e.timeframes.weekly.previous)}hrs</span>
            </div>
          </div>
          <div className="card-play">
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <h1>{data.map(e => e.title === "Play" && e.timeframes.weekly.current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Play" && e.timeframes.weekly.previous)}hrs</span>
            </div>
          </div>
          <div className="card-study">
            <div className="info">
              <div className="head">
                <h4>Study</h4><span>{iconEllipsis} </span>
              </div>
              <h1>{data.map(e => e.title === "Study" && e.timeframes.weekly.current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Study" && e.timeframes.weekly.previous)}hrs</span>
            </div>
          </div>
          <div className="card-exercise">
            <div className="info">
              <div className="head">
                <h4>Exercise</h4><span>{iconEllipsis} </span>
              </div>
              <h1>{data.map(e => e.title === "Exercise" && e.timeframes.weekly.current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Exercise" && e.timeframes.weekly.previous)}hrs</span>
            </div>
          </div>
          <div className="card-social">
            <div className="info">
              <div className="head">
                <h4>Social</h4><span>{iconEllipsis} </span>
              </div>
              <h1>{data.map(e => e.title === "Social" && e.timeframes.weekly.current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Social" && e.timeframes.weekly.previous)}hrs</span>
            </div>
          </div>
          <div className="card-selfcare">
            <div className="info">
              <div className="head">
                <h4>Self Care</h4><span>{iconEllipsis} </span>
              </div>
              <h1>{data.map(e => e.title === "Self Care" && e.timeframes.weekly.current)}hrs</h1>
              <span>Last Week - {data.map(e => e.title === "Self Care" && e.timeframes.weekly.previous)}hrs</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}