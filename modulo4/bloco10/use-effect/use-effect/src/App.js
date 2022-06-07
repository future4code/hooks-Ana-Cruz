import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { PokeCard } from './components/PokeCard/PokeCard';
import GlobalStyle from './GlobalStyle'
import { Main, Select } from './styles';

function App() {
  const [pokeList, setPokkeList] = useState([])
  const [selectedPokeName, setSelectedPokeName] = useState('')

  const onChangePokemonName = (ev) => {
    setSelectedPokeName(ev.target.value)
  }

  useEffect(() => { //usado para carregar os pokemons na lista, quando inicializar a página
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => {
      setPokkeList(res.data.results)
    }).catch(err => {
      alert('Erro')
    })
  }, [])

  const pokeListComponent = pokeList.map((pokemon, index) => {
      return(
        <option key={index} value={pokemon.name} >{pokemon.name}</option>
      )
  })

  return (
    <Main>
      <GlobalStyle />
      <h2>Selecione seu Pokemon</h2>
      <Select onChange={onChangePokemonName}>
        <option value={''} >Nenhum</option>
        {pokeListComponent}
      </Select>
      {selectedPokeName && <PokeCard pokemonName={selectedPokeName}/>}
    </Main>
  );
}

export default App;
