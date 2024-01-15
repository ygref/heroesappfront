export function PlayersIndex(props) {
  return (
    <div>
      <h1>All Players</h1>
      {props.players.map((player) => (
        <div key={player.id}>
          <h2>Name: {player.playername}</h2>
          <h2>Role 1: {player.player_role1}</h2>
          <h2>Role 2: {player.player_role2}</h2>
          <h2>Role 3: {player.player_role3}</h2>
        </div>
      ))}
    </div>
  );
}
