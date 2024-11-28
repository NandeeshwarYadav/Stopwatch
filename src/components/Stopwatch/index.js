// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0}

  intervalId = null

  onClickStart = () => {
    this.intervalId = setInterval(this.timer, 1000)
  }

  onClickStop = () => {
    clearInterval(this.intervalId)
  }

  onClickReset = () => {
    clearInterval(this.intervalId)
    this.setState({min: 0, sec: 0})
  }

  timer = () => {
    const {sec} = this.state
    if (sec === 60) {
      this.setState(prevState => ({min: prevState.min + 1, sec: 0}))
    } else {
      this.setState(prevState => ({sec: prevState.sec + 1}))
    }
  }

  render() {
    const {min, sec} = this.state

    const minutes = min < 10 ? `0${min}` : min
    const seconds = sec < 10 ? `0${sec}` : sec

    return (
      <div className="bg">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="time-img"
            />
            <p>Timer</p>
          </div>
          <div>
            <h1 className="time">
              {minutes}:{seconds}
            </h1>
          </div>
          <div>
            <button
              className="start-btn"
              type="button"
              onClick={this.onClickStart}
            >
              Start
            </button>
            <button
              onClick={this.onClickStop}
              className="stop-btn"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onClickReset}
              className="restart-btn"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
