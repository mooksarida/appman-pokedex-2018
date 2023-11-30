import React, { Component } from "react";
import Modal from "./Modal";
import PokemonCard from "./PokemonCard";
import search from "../assets/images/search.png";

export default class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  render() {
    const { isOpen, onClose, searchList, handleAdd, onSearch } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onClose={() => {
          this.setState({ searchText: "" });
          onClose();
        }}
      >
        <div className="border-searchBoxBorder border flex justify-between mb-[10px]">
          <input
            type="text"
            className="w-full border-transparent outline-none py-[10px]"
            value={this.state.searchText}
            onChange={(event) => {
              onSearch(event.target.value || "");
              this.setState({ searchText: event.target.value });
            }}
          />
          <img src={search} alt="search" className="w-[40px] h-[40px]" />
        </div>
        <div className="grid grid-cols-1 gap-[10px]">
          {searchList?.map((card) => (
            <PokemonCard key={card.id} card={card} handleAdd={handleAdd} />
          ))}
        </div>
      </Modal>
    );
  }
}
