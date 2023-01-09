import React, { Component } from 'react';
import './list.scss'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="listcontainer">
          <ul>
            {this.props.item.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
                <button
                  className="deletebtn"
                  onClick={this.props.deleteTask.bind(this.index)}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
