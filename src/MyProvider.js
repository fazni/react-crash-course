import React, {Component} from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {

  state = {
    todos: []
  };

  render() {
    return (
        <MyContext.Provider value={{
          todos:this.state.todos
        }}>
          {this.props.children}
        </MyContext.Provider>
    )
  }
}

export default MyProvider;