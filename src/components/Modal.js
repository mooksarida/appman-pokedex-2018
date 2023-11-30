import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { children, isOpen, onClose } = this.props;
    return (
      <div
        onClick={onClose}
        className={`
           absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full flex justify-center items-center z-10 ${
             !isOpen ? "hidden" : ""
           }`}
      >
        <div
          className="p-[40px] bg-white rounded-[6px] h-[660px] w-[800px] overflow-y-auto "
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }
}
