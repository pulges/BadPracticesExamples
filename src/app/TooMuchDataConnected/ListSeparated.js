import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setListTitle } from '../Reducers/appReducer';
import ListRow from './ListRow';

class ListSeparated extends PureComponent {
  
  handleTitleChange = (event) => {
    const value = event.target.value;
    this.props.dispatch(setListTitle(value));
  }

  render() {
    const { data } = this.props;
    const { title, list } = data;

    return (
      <div>
        Title: <input value={ title } onChange={ this.handleTitleChange }/><br/>
        <ul className="data-list">
          { list.map(row => <ListRow id={ row.id } key={ row.id }/>)  }
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

export default connect(mapStateToProps, mapDispatchToProps)(ListSeparated)
