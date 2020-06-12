import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'


class App extends Component {
    state = {
        userName: "wesingasongagain@gmail.com"
    }

    textChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

  render(){
      const style = {
          backgroundColor: 'gray',
          font: 'inherit',
          padding: '8px',
          cursor: 'pointer',
          border:'2px solid red'
      };
    return (
      <div className="App">
          <h1>
              This is a REACT Project
          </h1>
          <UserInput style={style} defaultName={this.state.userName} newName = {this.textChangeHandler}/>
          <UserOutput userName={this.state.userName}/>
          <UserOutput userName={"123yougofree@gmail.com"}/>
          <UserOutput userName={"herewegoagain@gmail.com"}/>


      </div>
    );
  }
}

export default App;
