import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from "redux";
import {Provider} from "react-redux";
import {reducer as formReducer } from "redux-form";
import SimpleForm from './Hello';
import Students from './students';
import './style.css';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer); 

class App extends Component { 
  constructor() { 
    super();
    this.state = {
      students: []
    };
  }

  submit(value) {
    this.setState({students: this.state.students.concat(value)});  
  }


  render() {
    return (
      <div>
       <SimpleForm onSubmit={this.submit.bind(this)}/>
       <hr />
      <Students ppl={this.state.students}/>
      </div>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
