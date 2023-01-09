import React, { Component } from 'react';
import './Stringclass.scss';

export class Stringclass extends Component {

  
  constructor(props) {
    super(props);
    this.state = { title : 'Class based function' };
  }

  
  changeState() {
    this.setState({
      title: this.state.title.split("").reverse().join(""),
    });
  }
  render() {
    return(
    <div className="container">
      <div className="text"><h1>{this.state.title}</h1></div>
      <button className="btn" onClick={()=>this.changeState()}>reverse</button>
      </div>
    )
  }
}

export default Stringclass
