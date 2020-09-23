import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WhiskyDrinkingDirections from './components/WhiskyDrinkingDirections';
import './css/styles.css';

class Main extends Component{
  render(){
    return(
        <WhiskyDrinkingDirections tasks = {['Pour whisky', 'Add cola and squeeze lime', 'Drop 2 ice cubes', 'Stir and drink']}/>
    )
  }
}
ReactDOM.render(<Main/>,  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
