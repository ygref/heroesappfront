export function PlayersCharactersIndex(props) {
  return (
    <div>
      <h1>Player / Character</h1>
      {props.playerscharacters.map((playerscharacter) => (
        <div key={playerscharacter.id} style={{ display: "flex", alignItems: "center" }}>
          <img src={playerscharacter.thumbnail}></img>
          <h2 style={{ marginRight: "8px" }}>Player:</h2>
          <p style={{ marginRight: "16px" }}>{playerscharacter.playername}</p>
          <h2 style={{ marginRight: "8px" }}>Character:</h2>
          <p style={{ marginRight: "16px" }}>{playerscharacter.character_name}</p>
          <h2 style={{ marginRight: "8px" }}>Role:</h2>
          <p style={{ marginRight: "16px" }}>{playerscharacter.character_role}</p>
          <h2 style={{ marginRight: "8px" }}>Role Tier:</h2>
          <p style={{ marginRight: "16px" }}>{playerscharacter.role_tier}</p>
        </div>
      ))}
    </div>
  );
}
