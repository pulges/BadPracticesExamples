import React, { Component } from 'react'

export default class UnpureRandomNr extends Component {
  render() {
    return (
      <span className="random-nr">
        { Math.round(Math.random() * 10) }
      </span>
    )
  }
}
