import React, { Component } from 'react'
//import { getReducedColor } from './randomColorGenerator.js'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props);
  //   console.log(state);
  //   return {childColor: getReducedColor(props.color)}
  // }

  newTier3Color = (event) => {
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
      <div onClick={this.props.newColor} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.newTier3Color}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.newTier3Color}/>
      </div>
    )
  }
}
