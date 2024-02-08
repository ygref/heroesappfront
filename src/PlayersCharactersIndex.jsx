export function PlayersCharactersIndex(props) {
  return (
    <div>
      <h1>Player / Character</h1>
      {props.playerscharacters.map((playerscharacter) => (
        <div key={playerscharacter.id}>
          <h2>
            Player: {playerscharacter.playername} Character: {playerscharacter.character_name}
          </h2>
        </div>
      ))}
    </div>
  );
}
