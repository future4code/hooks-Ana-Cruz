import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardContainer } from './style';

export function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})
    const [color, setColor] = useState('')

    useEffect(() => {
        pegaPokemon(props.pokemonName)
        escolheCor(pokemon.types && pokemon.types[0].type.name)
        // console.log(props.pokemonName, color)
    }, [props.pokemonName])

    const pegaPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => {
                setPokemon(res.data)
            }).catch(err => {
                alert('erro ao pegar pokemon')
            })
    }

    const escolheCor = (type) => {
        switch (type) {
            case 'normal':
                setColor('beige')
                break;
            case 'fire':
                setColor('red')
                break;
            case 'water':
                setColor('blue')
                break;
            case 'grass':
                setColor('green')
                break;
            case 'flyin':
                setColor('cyan')
                break;
            case 'fighting':
                setColor('white')
                break;
            case 'poison':
                setColor('purple')
                break;
            case 'electric':
                setColor('yellow')
                break;
            case 'bug':
                setColor('gray')
                break;
            case 'rock':
                setColor('brown')
                break;
            case 'ice':
                setColor('aquamarine')
                break;
            case 'dragon':
                setColor('orange')
                break;
            default:
                setColor('pink')
                break;
        }
    }

    return (
        <CardContainer colorBorder={color} >
            <p>{props.pokemonName}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </CardContainer >
    )
}