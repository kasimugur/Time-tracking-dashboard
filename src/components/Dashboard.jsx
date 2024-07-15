import { useState } from 'react'
import '../css/style.css'
import data from '../data.json'
import { iconEllipsis } from '../pages/Page'
export default function Dashboard() {
  const [daily, setDaily] = useState(null)
  const [weekly, setWeekly] = useState(null)
  const [monthly, setMonthly] = useState(null)
  const [dates, setDates] = useState()


  return (
    <>
      <div className="container">
        <div className="card" >
          <div className="header" >
            <img className="img-prf" src="src/images/image-jeremy.png" alt="profilo" />
            <span>Report for</span>
            <h1>Jeremy Robson</h1>
          </div >
          <a onClick={() => setDaily(data.map(e => e.timeframes.daily))} href="">Daily</a>
          <a onClick={() => setWeekly(data.map(e => e.timeframes.weekly))} href="">Weekly</a>
          <a onClick={() => setMonthly(data.map(e => e.timeframes.monthly))} href="">Monthly</a>
        </div>
        <div className="card-item">


          <div className="card-work">
            <div className="info">
              <div className="head">
                <h4>Work</h4> <span>{iconEllipsis} </span>
              </div>
              <h1>32hrs</h1>
              <span>Last Week - 36hrs</span>
            </div>
          </div>
          <div className="card-play">
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <h1>32hrs</h1>
              <span>Last Week - 36hrs</span>
            </div>
          </div>
          <div className="card-study">
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <h1>32hrs</h1>
              <span>Last Week - 36hrs</span>
            </div>
          </div>
          <div className="card-exercise">
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <h1>32hrs</h1>
              <span>Last Week - 36hrs</span>
            </div>
          </div>
          <div className="card-social">
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <h1>32hrs</h1>
              <span>Last Week - 36hrs</span>
            </div>
          </div>
          <div className="card-selfcare">
            <div className="info">
              <div className="head">
                <h4>Play</h4><span>{iconEllipsis} </span>
              </div>
              <h1>32hrs</h1>
              <span>Last Week - 36hrs</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}