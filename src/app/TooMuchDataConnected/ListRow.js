import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import UnpureRandomNr from '../UnpureRandomNr';
import { toggleRowValue } from '../Reducers/appReducer';

class ListRow extends PureComponent {
  handleRowClick = (event) => {
    const { id } = this.props;
    this.props.dispatch(toggleRowValue(id));
  }

  render() {
    const { row } = this.props;
    return (
      <li>
        <div>
          { row.title }
        </div>
        <div>
          <button onClick={ this.handleRowClick } data-id={ row.id } >{ row.value ? 'ON' : 'OFF' }</button>
        </div>
        <div>
          <UnpureRandomNr/>
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  row: state.app.withDataObject.list.find(r => r.id === ownProps.id)
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ListRow)
