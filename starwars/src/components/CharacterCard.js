// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div `
    border: 5px solid gold;
    border-radius: 20px;
    width: 30%;
    margin: 1rem 0.5rem;
    @media screen and (max-width: 800px){
       width: 45%; 
    }
    @media screen and (max-width: 500px){
       width: 90%; 
    }
`

const Attribute = styled.span `
    font-weight: bold;
`

function CharacterCard(props) {
    let character = {};
    if(props.character) character = props.character;
    
    return(
        <CardDiv>
            <h2>{character.name}</h2>
            <p><Attribute>Birth year:</Attribute> {character.birth_year}</p>
            <p><Attribute>Gender:</Attribute> {character.gender}</p>
            <p><Attribute>Height:</Attribute> {character.height}</p>
            <p><Attribute>Mass:</Attribute> {character.mass}</p>
            <p><Attribute>Eye color:</Attribute> {character.eye_color}</p>
            <p><Attribute>Hair color:</Attribute> {character.hair_color}</p>
            <p><Attribute>Skin color:</Attribute> {character.skin_color}</p>
        </CardDiv>
    );
}

export default CharacterCard;