import React from 'react';
import Word from './Word';

export default function ListOfWords( {wordsList} ) {
    return (
        wordsList.map((word) => {
            return <Word key={word.toString()} word={word} />
        })
    );
}
