import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//To make a react component we make a class
//Then we extend component
class App extends Component {
  //All classes need the render method
  //All components return the html 
  state = {
    //state object 
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age: 23},
    ],
    otherState: 'Some other value',
    showPersons: false,
  }
  switchNameHandler = (newName) =>{
    //console.log('Was Clicked')
    // dont do this: this.state.persons[0].name = 'Shane Dalton';
    this.setState({
      persons: [
        {name: newName, age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age: 27},
      ],
     })
  }
  
  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name: 'Stephanie', age:26},
      ],
     })
  }
  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    //make a local version and shortcut it 
    // const 
    const style={
      backGroundColor: 'white',
      fonrt: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'Pointer'
    };

    return (
      <div className="App">
        <h1> Hi im a react app developers app </h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
       { this.state.showPersons ? 
        <div> 
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} /> 
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Max')} 
            changed={this.nameChangedHandler}/> 
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div> : null
      }
      </div>

      // React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'
      // ))

    );
  }
}

export default App;
