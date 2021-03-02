import React, { PureComponent } from 'react'
import PureRandomNr from '../PureRandomNr';
import UnpureRandomNr from '../UnpureRandomNr';

export default class NoPureComponent extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      toggleState: false
    };
  }

  toggle = () => {
    this.setState({
      toggleState: !this.state.toggleState
    });
  }

  render() {
    return (
      <div>
        <div>
          This should not change if component state changes, but is unpure Component : <UnpureRandomNr/>
        </div>
        <div>
          Same thing but PureComponent : <PureRandomNr/>
        </div>
        <div>
          <button onClick={ this.toggle }>{ this.state.toggleState ? 'On' : 'Off' }</button>
        </div>

      </div>
    )
  }
}
