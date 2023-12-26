// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {bg: true}
  onPress = () => {
    this.setState(prevState => ({bg: !prevState.bg}))
  }

  render() {
    const {bg} = this.state
    const modeName = bg ? 'con1' : 'con2'
    const buttonText = bg ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-con">
        <div className={`${modeName}`}>
          <h1 className="h1">Click To Change Mode</h1>
          <button className="button" onClick={this.onPress}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
