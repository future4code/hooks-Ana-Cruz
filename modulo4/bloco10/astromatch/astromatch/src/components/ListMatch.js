import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants";
import { SmallProfileCard } from "./SmallProfileCard";
import Button from '@mui/material/Button';
import cleanIcon from '../img/clean-icon.svg'

const Container = styled.div`
    width: 100%;
    height: 84%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    position: relative;
    background-color: #eeeeee;
`

export const ButtonClear = styled.div`
    position: absolute;
    padding: 0%;;
    align-self: flex-end;
`

export const ListMatch = () => {
    const [matches, setMatches] = useState([])

    useEffect(()=>{
        getMatches()
    }, [])

    const getMatches = () => {
        axios
        .get(`${BASE_URL}/matches`)
        .then(res => setMatches(res.data.matches))
        .catch(err => console.log(err))
    }

    const clear = () => {
        axios
          .put(`${BASE_URL}/clear`)
          .then(res => getMatches())
          .catch(err => console.log(err))
      }

    const renderMatches = matches.map(item => {
            return <SmallProfileCard key={item.id} profile={item} />
        })

    return (
        <Container>
            {renderMatches}
            <ButtonClear><Button variant="contained" size="small" defaultChecked
          onClick={() => clear()} ><img src={cleanIcon} alt='icone de limpeza' /></Button></ButtonClear>
        </Container>
    );
}
