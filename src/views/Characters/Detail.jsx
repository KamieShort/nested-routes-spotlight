import { Link, useParams } from 'react-router-dom';

import React from 'react';
import { useEffect, useState } from 'react';

export default function CharacterDetail({ characters = [] }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const selectedCharacter = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(selectedCharacter);
  }, [id]);
  return (
    <>
      <h1>{character.name} </h1>
      <img src={character.image} />

      <Link to="/characters"> View Characters </Link>
    </>
  );
}
