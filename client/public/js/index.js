import React from 'react'
import ReactDOM from 'react-dom'
import request from 'request-promise'
/*
  Here is where we're going to put our front-end logic
  Before beginning delete the render function below (After you have already gotten hello world in the browser)
*/

const styles = {
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  },
  placeholder: {
    borderTop: '1, 5px solid black',
    padding: '5px',
    marginBottom: '0.5%',
    width: '100%'
  },
  textRight: {
    textAlign: 'right'
  },
  smallMargin: {
    marginBottom: '0',
    marginTop: '0'
  }
}

class ListHolder extends React.Component {
  constructor(props){
    this.state = {
      todos: []
    }
    this.loadList = this.loadList.bind(this);
  }

  loadList(){
    request('http://localhost:3000/get/all').then(todos => this.setState({todos: JSON.parse(todos)}));
  }

  render (){
    return <div>

          </div>
  } 

}


 

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);