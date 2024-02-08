import axios from "axios";
import { useState, useEffect } from "react";
import { PlayersIndex } from "./PlayersIndex";
import { CharactersIndex } from "./CharactersIndex";
import { PlayersCharactersIndex } from "./PlayersCharactersIndex";

export function Content() {
  const [players, setPlayers] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [playerscharacters, setPlayersCharacters] = useState([]);

  const handleIndexPlayersCharacters = () => {
    console.log("handleIndexPlayersCharacters");
    axios.get("http://localhost:3000/players_characters.json").then((response) => {
      console.log(response.data);
      setPlayersCharacters(response.data);
    });
  };

  const handleIndexPlayers = () => {
    console.log("handleIndexPlayers");
    axios.get("http://localhost:3000/players.json").then((response) => {
      console.log(response.data);
      setPlayers(response.data);
    });
  };

  const handleIndexCharacters = () => {
    console.log("handleIndexCharacters");
    axios.get("http://localhost:3000/characters.json").then((response) => {
      console.log(response.data);
      setCharacters(response.data);
    });
  };

  useEffect(handleIndexPlayersCharacters, []);

  useEffect(handleIndexCharacters, []);

  useEffect(handleIndexPlayers, []);
  return (
    <div>
      <h1>HeroesApp Team</h1>
      <PlayersIndex players={players} />
      <CharactersIndex characters={characters} />
      {/* <PlayersCharactersIndex playersCharacter={playerscharacters} /> */}
    </div>
  );
}
