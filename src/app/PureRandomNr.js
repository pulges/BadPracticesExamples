import React, { PureComponent } from 'react'

export default class PureRandomNr extends PureComponent {
  render() {
    return (
      <span className="random-nr">
        { Math.round(Math.random() * 10) }
      </span>
    )
  }
}
