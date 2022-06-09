import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants";
import { SmallProfileCard } from "./SmallProfileCard";

const Container = styled.div`
    width: 100%;
    height: 83%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
`

export const ListMatch = (props) => {
    const [matches, setMatches] = useState([])

    useEffect(()=>{
        getMatches()
    }, [])

    const getMatches = () => {
        axios
        .get(`${BASE_URL}/matches`)
        .then(res => {
            setMatches(res.data.matches)
            console.log(res.data.matches)
        })
        .catch(err => console.log(err))
    }

    const renderMatches = matches.map(item => {
            return <SmallProfileCard key={item.id} profile={item} />
        })

    return (
        <Container>
            {renderMatches}
        </Container>
    );
}
