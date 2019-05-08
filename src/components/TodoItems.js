import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {

  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      backgroundColor: '#f4f4f4',
      textDecoration: this.props.todoitems.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todoitems;
    return (
        <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
          </p>
        </div>
    );
  }

}

// PropTypes.
TodoItems.propTypes = {
  todoitems: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  float: 'right',
  cursor: 'pointer'
}
// Add Style for my item.
// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

export default TodoItems;