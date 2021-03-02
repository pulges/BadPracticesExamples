import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSel1, selectSel2 } from '../Reducers/appReducer'

class SagaNoUserAction extends Component {

  handleSel1Change = (event) => {
    this.props.dispatch({ type: 'SELECT_VALUE1', data: event.target.value });
  }

  handleSel2Change = (event) => {
    this.props.dispatch({ type: 'SELECT_VALUE2', data: event.target.value });
  }

  render() {
    return (
      <div>
        Selection one should clear the other
        <div>
          Select 1:
          <select value={ this.props.selectSel1 } onChange={ this.handleSel1Change }>
            <option>none</option>
            <option>selected</option>
          </select>
        </div>
        <div>
          Select 2:
          <select value={ this.props.selectSel2 } onChange={ this.handleSel2Change }>
            <option>none</option>
            <option>selected</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectSel1: selectSel1(state),
    selectSel2: selectSel2(state),
  };
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SagaNoUserAction)
