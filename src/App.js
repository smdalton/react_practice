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
      {id: 'adas', name: 'Max', age:28},
      {id: 'asda',name: 'Manu', age:29},
      {id: 'eryert', name: 'Stephanie', age: 23},
      
    ],
    otherState: 'Some other value',
    showPersons: false,
  }
  deletePersonHandler = (personIndex) =>{
    //This is a reference type, that is why it's const
    const persons = [...this.state.persons];
   //Now we access the data at the reference location and del personIndex
    persons.splice(personIndex, 1);
    //we save the changes
    //now we overwrite
    this.setState({persons: persons})
  }
  //Event is a react provided data item
  nameChangedHandler = (event, id)=>{
    //Write a boolean lambda that will return true when the person
    //being analyzed has the right id as passed in above
    //Then it will store the result in personIndex
    //The inner anonymous function will merely trigger the index to be stored
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    this.state.persons[personIndex]
    this.setState({
      persons: [
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name: 'Stephanie', age:26},
      ],
     })
  }
  //the handler to show and hide the names on button click
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/*for person in this.state.persons map => */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id}
              //this functions gets executed on the event
              changed={(event) => this.nameChangedHandler()}/>
          })}          
      </div> 
      );
    }


    return (
      <div className="App">
        <h1> Hi im a react app developers app </h1>
        <button 
        style={style}
        /* set onclick prop to send an instance of toggle handler */
        onClick={this.togglePersonsHandler}>Show/Hide Names</button>
        {persons}
      </div>

    );
  }
}

export default App;
