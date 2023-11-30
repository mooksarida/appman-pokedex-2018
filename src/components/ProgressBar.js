import React, { Component } from "react";

export default class ProgressBar extends Component {
  render() {
    const { title, value } = this.props;
    return (
      <div className="flex">
        <p className="w-[22%]">{title}</p>
        <div className="bg-levelTubeBackground rounded-full flex-1 max-w-[300px]">
          <div
            className=" bg-levelTubeValueBackground h-full rounded-full"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    );
  }
}
