import React from 'react'

export default class Pixel extends React.Component {
    constructor(props){
    super(props)

    this.state = {
        style:
        {
         height:'10px',
         width:'10px', 
         backgroundColor: this.randomHexColor()
        }
        }
    }

    randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` 

    clickHandler = evt => {
        this.setState({
          style: {
            height:'10px',
            width:'10px', 
            backgroundColor: this.randomHexColor()
          }
        })
      }

      enterHandler = evt => {
        this.setState({
          style: {
            height:'10px',
            width:'10px', 
            backgroundColor:'green'
          }
        })
      }

      doubleClickHandler = evt => {
        this.setState({
          style: {
            height:'10px',
            width:'10px', 
            backgroundColor:'white'
          }
        })
      }


  render () {
    return (
      <div 
      style={this.state.style} 
      onClick={this.clickHandler} 
      onMouseEnter={this.enterHandler} 
      onDoubleClick={this.doubleClickHandler}
      >
      </div>
    )
  }
}