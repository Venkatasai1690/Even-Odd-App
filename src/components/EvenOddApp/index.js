// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  ClickIncrementButton = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1>Count {count}</h1>
          <p className="count-info">Count is {countText}</p>
          <button
            className="button"
            onClick={this.ClickIncrementButton}
            type="button"
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
