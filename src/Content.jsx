import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { PlayersIndex } from "./PlayersIndex";
import { CharactersIndex } from "./CharactersIndex";
import { PlayersCharactersIndex } from "./PlayersCharactersIndex";

export function Content() {
  const [players, setPlayers] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [playerscharacters, setPlayersCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [playersResponse, charactersResponse, playersCharactersResponse] = await Promise.all([
          axios.get("http://localhost:3000/players.json"),
          axios.get("http://localhost:3000/characters.json"),
          axios.get("http://localhost:3000/players_characters.json"),
        ]);

        setPlayers(playersResponse.data);
        setCharacters(charactersResponse.data);
        setPlayersCharacters(playersCharactersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="background-image font-white margin-padding">
      <h1 className="text-align-center">HeroesApp</h1>
      {/* <PlayersIndex players={players} />
      <CharactersIndex characters={characters} /> */}
      {playerscharacters.length > 0 ? (
        <PlayersCharactersIndex playerscharacters={playerscharacters} />
      ) : (
        <p>Loading players characters...</p>
      )}
    </div>
  );
}
