import React, { Component } from 'react';

class WhiskyDrinkingDirections extends Component{
  render(){
    return(
        
      <div>
        <h2>Drinking directions</h2><ol>
        {
            this.props.tasks.map((task, index) => <li key={index}> {task} </li>)
        }
        </ol>
      </div>
    )
  }
}
export default WhiskyDrinkingDirections;