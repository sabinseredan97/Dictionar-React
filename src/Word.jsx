import React from 'react';

export default function Word( {word} ) {
  return (
    <ul className = "listOfWords">
        {word}
    </ul>
  );
}
