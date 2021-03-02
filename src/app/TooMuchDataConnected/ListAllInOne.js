import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import UnpureRandomNr from '../UnpureRandomNr';
import { setListTitle, toggleRowValue } from '../Reducers/appReducer';

class ListAllInOne extends PureComponent {

  handleTitleChange = (event) => {
    const value = event.target.value;
    this.props.dispatch(setListTitle(value));
  }

  handleRowClick = (event) => {
    const id = event.target.dataset.id;
    this.props.dispatch(toggleRowValue(id));
  }

  renderRow = (row) => {
    return (
      <li key={row.id}>
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

  render() {
    const { data } = this.props;
    const { title, list } = data;

    return (
      <div>
        Title: <input value={ title } onChange={ this.handleTitleChange }/><br/>
        <ul className="data-list">
          { list.map(this.renderRow) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.app.withDataObject
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAllInOne)
