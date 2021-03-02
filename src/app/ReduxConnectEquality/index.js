import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Counter from '../../features/counter/Counter';
import UnpureRandomNr from '../UnpureRandomNr';

class ReduxConnectEquality extends PureComponent {
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
          Button that connects to state separatly: <Counter/>
        </div>
        <div>
          This value should not change, but renders if some other prop in state changes: <UnpureRandomNr />
        </div>
      </div>
    )
  }
}

// If blank state remains constant (use this constant), renders are not called.
const BLANK_FOO = {};

const mapStateToProps = (state) => {
  return {
    foo: {} // use BLANK_FOO instead of {} to fix
  };
};

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxConnectEquality);
