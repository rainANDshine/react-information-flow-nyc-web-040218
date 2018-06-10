import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  newColor = (event) => {
    const newColor = getRandomColor();
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  newTier2Color = (event) => {
    event.stopPropagation();
    const newColor = getRandomColor();
    this.setState({
      childColor: newColor
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.newColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} newColor={this.newTier2Color} />
        <Tier2 color={this.state.childColor} newColor={this.newTier2Color} />
      </div>
    )
  }
}
