export function CharactersIndex(props) {
  return (
    <div>
      <h1>All Characters</h1>
      {props.characters.map((character) => (
        <div key={character.id}>
          <h2>Name: {character.character_name}</h2>
          <h2>Role: {character.character_role}</h2>
          <h2>Role Tier: {character.role_tier}</h2>
        </div>
      ))}
    </div>
  );
}
