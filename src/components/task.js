import React from "react";
import "./task.css";
import Stopwatch from "./stopwatch.js";
import iconCross from "../media/iconCross.png";
import iconZero from "../media/iconZero.png";

export default class Task extends React.Component {
  handleSWClick = () => this.props.onSelectClick(this.props.index);

  handleDClick = () => this.props.onHideClick(this.props.index);

  handleRClick = () => this.props.onResetClick(this.props.index);

  activeState = () => (this.props.active ? "taskActive" : "taskInactive");

  updateDescription = (event) => {
    this.props.onUpdateDescription(this.props.index, event.target.value);
  };

  render() {
    return (
      <div className="taskBase">
        <div className={this.activeState()}>
          <input
            className="description"
            type="text"
            value={this.props.description}
            onChange={this.updateDescription}
          />
          <button className="stopwatch">
            <Stopwatch
              key={`stopwatch${this.props.index}`}
              timer={this.props.timer}
            />
          </button>
          <button className="reset" onClick={() => this.handleRClick()}>
            <img className="butIcon" src={iconZero} alt="Reset timer" />
          </button>
          <button className="delete" onClick={() => this.handleDClick()}>
            <img className="butIcon" src={iconCross} alt="Hide task" />
          </button>
          <button className="stopstart" onClick={() => this.handleSWClick()}>
            {this.props.active ? "STOP" : "START"}
          </button>
        </div>
      </div>
    );
  }
}
