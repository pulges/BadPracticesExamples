import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class index extends PureComponent {
  handleClickGood = () => {
    const { dispatch, clicks } = this.props;
    dispatch({ type: 'SET_CLICKS', clicks: { count: clicks.count + 1 } });
  }

  handleClickBad = () => {
    const { dispatch, clicks } = this.props;
    clicks.count += 1;
    dispatch({ type: 'SET_CLICKS', clicks: { count: clicks } });
  }

  render() {
    return (
      <div>
        Clicked { this.props.clicks.count } times
        <br></br>

        <button onClick={ this.handleClickGood }>
          Updates state correctly preserving immutability
        </button>
        <button onClick={ this.handleClickBad }>
          Updates state badly mutating state
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clicks: state.other.clicks
  };
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
