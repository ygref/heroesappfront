export function PlayersCharactersShow(props) {
  const { playersCharacter } = props;

  if (!playersCharacter) {
    return <div>No data available</div>;
  }

  // If playersCharacter is an array, map over it
  if (Array.isArray(playersCharacter)) {
    return (
      <div>
        {playersCharacter.map((playersCharacterItem) => (
          <div key={playersCharacterItem.id}>
            <h1>Players Character Details</h1>
            <h3>Player:</h3>
            <p>Player Name: {playersCharacterItem.player?.playername}</p>
            <p>Role 1: {playersCharacterItem.player?.player_role1}</p>
            <h3>Character:</h3>
            <p>Character Name: {playersCharacterItem.character?.character_name}</p>
            <p>Role: {playersCharacterItem.character?.character_role}</p>
          </div>
        ))}
      </div>
    );
  }
}
