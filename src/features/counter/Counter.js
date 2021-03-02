import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  increment,
  selectCount,
} from './counterSlice';

class Counter extends PureComponent {
  handleClick = () => {
    this.props.dispatch(increment());
  }

  render() {
    return (
      <button onClick={ this.handleClick }>
        Clicked { this.props.count } times
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  count: selectCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);