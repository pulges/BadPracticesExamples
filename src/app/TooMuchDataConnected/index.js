import React, { PureComponent } from 'react'
import ListAllInOne from './ListAllInOne';
import ListSeparated from './ListSeparated';

export default class TooMuchDataConnected extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <h2>Table rendered all in one component</h2>
          <ListAllInOne/>
        </div>

        <div>
          <h2>Table rendered rows separately connected</h2>
          <ListSeparated/>
        </div>
      </div>
    )
  }
}