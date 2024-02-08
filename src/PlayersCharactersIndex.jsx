export function PlayersCharactersIndex(props) {
  return (
    <div>
      <h1>Player / Character</h1>
      {props.playerscharacters.map((playerscharacter) => (
        <div key={playerscharacter.id}>
          <h2>Player: {playerscharacter.player.playername}</h2>
        </div>
      ))}
    </div>
  );
}
