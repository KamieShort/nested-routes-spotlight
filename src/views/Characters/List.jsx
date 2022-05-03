import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterDetail from './Detail';
import { Route } from 'react-router-dom';
import React from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function CharacterList() {
  const { url, path } = useRouteMatch;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await resp.json();
      setCharacters(results);
      setLoading(false);
    };
    getCharacters();
  }, []);

  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={characters.id}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/:id`}>
        <CharacterDetail characters={characters} loading={loading} />
      </Route>
    </>
  );
}
