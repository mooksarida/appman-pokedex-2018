import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import happyImg from "../assets/images/cute.png";

export default class PokemonCard extends Component {
  render() {
    const { card, handleRemove, handleAdd } = this.props;
    return (
      <div className="bg-cardBackground shadow hover:shadow-hover flex items-center p-[10px] gap-x-[10px] relative group">
        {handleAdd && (
          <button
            className=" text-colorAddButton absolute top-0 right-0 text-2xl p-[10px] opacity-0 group-hover:opacity-100"
            onClick={() => handleAdd(card)}
          >
            Add
          </button>
        )}
        {handleRemove && (
          <button
            className=" text-colorAddButton absolute top-0 right-0 text-2xl p-[10px] opacity-0 group-hover:opacity-100"
            onClick={() => handleRemove(card)}
          >
            X
          </button>
        )}
        <img src={card.imageUrl} alt="pokemon" className="h-[180px]" />
        <div className="flex flex-col gap-y-[10px] w-full">
          <p className="font-gaegu text-3xl">{card.name.toUpperCase()}</p>
          <div className="flex flex-col gap-y-[5px]">
            <ProgressBar title="HP" value={card.hp} />
            <ProgressBar title="STR" value={card.strength} />
            <ProgressBar title="WEAK" value={card.weaknesses} />
          </div>
          <div className="flex gap-x-[2px]">
            {Array(Math.round(card.happiness))
              .fill(null)
              .map((_, i) => (
                <img
                  key={i}
                  src={happyImg}
                  alt="happy icon"
                  className="w-[40px] h-[40px]"
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
