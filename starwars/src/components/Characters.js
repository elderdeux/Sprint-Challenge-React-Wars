import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const CharactersDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 500px){
       flex-direction: column;
       align-content: center; 
    }
`

const ButtonsContainer = styled.div `
`

function Characters() {
    const [people, setPeople] = useState('https://swapi.dev/api/people/');
    const [characters, setCharacters] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    useEffect(() => {
        axios
            .get(people)
            .then(response => {
                console.log(response);
                setCharacters(response.data.results);
                setNextPage(response.data.next);
                setPreviousPage(response.data.previous);
            });
    },[people]);


    return(
        <div>
            <Button onClick={() => setPeople(previousPage)} disabled={!previousPage}>Previous page</Button>
            <Button onClick={() => {setPeople(nextPage);}} disabled={!nextPage}>Next page</Button>
            <CharactersDiv>
                {characters.map(character => {
                    return (
                        <CharacterCard character={character} key={character.name}/>
                    );
                })}
            </CharactersDiv>
        </div>
        
    );
}

export default Characters;