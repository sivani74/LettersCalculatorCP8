// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="search">Enter the phrase</label>
          <br />
          <input
            type="text"
            id="search"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearch}
            className="text-input"
          />
          <p className="letters">No.of letters: {searchInput.length} </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
