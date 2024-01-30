export function PlayersCharactersShow(props) {
  return (
    <div>
      <h1>Players Character Details</h1>
      {props.playersCharacter.map((playersCharacter) => (
        <div key={playersCharacter.id}>
          <h3>Player:</h3>
          <p>Player Name: {playersCharacter.player.playername}</p>
          <p>Role 1: {playersCharacter.player.player_role1}</p>
          <h3>Character:</h3>
          <p>Character Name: {playersCharacter.character.character_name}</p>
          <p>Role: {playersCharacter.character.character_role}</p>
        </div>
      ))}
    </div>
  );
}
