import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';
import Questions from './Questions/Questions';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {/* <Questions/> */}


        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>

        <p>Work in progress.</p>
      </div>
    );
  }
}

export default App;