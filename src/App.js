import React, { Component } from "react";
import { API_URL } from "./libs/config";
import PokemonCard from "./components/PokemonCard";
import SearchModal from "./components/SearchModal";

function isNumber(value) {
  return value && typeof value === "number";
}

function calDamage(attacks) {
  const damages = attacks.map((attack) => attack.damage);
  return damages.reduce((prev, curr) => prev + +curr.replace(/\D/g, ""), 0);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allList: [],
      searchList: [],
      selectedCards: [],
      isShowModal: false,
    };
    this.fetchCardLists = this.fetchCardLists.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  async fetchCardLists() {
    try {
      const response = await fetch(`${API_URL}/cards?limit=100`);
      const data = await response.json();
      const lists = data.cards.map((card) => {
        const hp = isNumber(+card.hp) ? Math.min(+card.hp, 100) : 0;
        const strength = Math.min((card.attacks?.length || 0) * 50, 100);
        const weaknesses = Math.min((card.weaknesses?.length || 0) * 100, 100);
        const damage = card.attacks ? calDamage(card.attacks) : 0;
        const happiness = (hp / 10 + damage / 10 + 10 - weaknesses / 100) / 5;
        return {
          ...card,
          hp,
          strength,
          weaknesses,
          happiness,
        };
      });
      this.setState({
        allList: lists,
      });
    } catch (err) {
      console.error(err);
    }
  }

  onSearch(text) {
    const searchText = text.toLowerCase();
    const selectedIds = this.state.selectedCards.map((card) => card.id);
    let results = [];
    results = this.state.allList.filter(
      (card) =>
        (!selectedIds.length ||
          (selectedIds.length && !selectedIds.includes(card.id))) &&
        (!searchText ||
          card.name?.toLowerCase()?.includes(searchText) ||
          card.type?.toLowerCase()?.includes(searchText)),
    );
    this.setState({ searchList: results });
  }

  handleAdd(card) {
    this.setState((prev) => {
      return {
        ...prev,
        selectedCards: [...prev.selectedCards, card],
        searchList: prev.searchList.filter((c) => c.id !== card.id),
      };
    });
  }

  handleRemove(card) {
    this.setState((prev) => {
      return {
        ...prev,
        selectedCards: prev.selectedCards.filter((c) => c.id !== card.id),
      };
    });
  }

  componentDidMount() {
    this.fetchCardLists();
  }

  render() {
    return (
      <div className="max-h-[712px]">
        <SearchModal
          isOpen={this.state.isShowModal}
          onClose={() => {
            this.setState({ isShowModal: false });
          }}
          searchList={this.state.searchList}
          handleAdd={this.handleAdd}
          onSearch={this.onSearch}
        />
        <div className="p-[20px] overflow-y-auto h-[662px] max-h-[662px]">
          <p className="text-5xl text-center pb-[20px]">My Pokedex</p>
          <div className="grid grid-cols-2 gap-[10px]">
            {this.state.selectedCards?.map((card) => (
              <PokemonCard
                key={card.id}
                card={card}
                handleRemove={this.handleRemove}
              />
            ))}
          </div>
        </div>
        <div className="h-[50px] w-full bg-bottomBarBackground relative">
          <button
            onClick={() => {
              this.setState({ isShowModal: true });
              this.onSearch("");
            }}
            className="absolute top-[-40px] right-1/2 translate-x-1/2 text-white text-7xl w-[90px] h-[90px] bg-bottomBarBackground rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
