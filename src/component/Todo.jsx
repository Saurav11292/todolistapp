import React, { Component } from "react";
import List from "./List";
import "./todo.scss";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
      items: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onDeleteHandler = (index) => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({
      items: deleteTask,
    });
  };

  onDeleteAll = (e) => {
    e.preventDefault();
    this.setState({
      items: [],
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <div>
        <div className="content">
          <div>
            <div className="titletodo">
              <h3>TO DO LIST</h3>
            </div>
            <div className="textfield">
              <div className="text">
                <input
                  type="text"
                  value={this.state.term}
                  placeholder="Add here"
                  onChange={this.onChangeHandler}
                />
              </div>
              <button
                className="button"
                type="submit"
                onClick={this.onSubmitHandler}
              >
                +
              </button>
            </div>
            <div className="listed">
              <List deleteTask={this.onDeleteHandler} item={this.state.items} />
            </div>
            <div className="taskcount">
              <p>You have {this.state.items.length} pending task</p>
              <button type="delete" onClick={this.onDeleteAll}>
                Clear all
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
