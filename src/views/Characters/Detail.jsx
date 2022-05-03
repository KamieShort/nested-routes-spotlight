import { Link, useParams } from 'react-router-dom';

import React from 'react';

export default function CharacterDetail({ characters = [] }) {
  const { id } = useParams();
  return (
    <>
      <h1>Character {id} </h1>
      <h2>
        Check Out These<Link to="/characters"> Characters </Link>
      </h2>
    </>
  );
}
