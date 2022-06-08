import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants";
import { ProfileCard } from "./ProfileCard";
import { FcLike } from 'react-icons/fc';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Container = styled.div`
    /* border: 1px solid red; */
    height: 83%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Buttons = styled.div`
    /* border: 1px solid green; */
    width: 90%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 2rem;
        color: darkred;
    }
`


export const ChoiceMatch = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])
    
    const getProfileToChoose = () => {
        axios
        .get(`${BASE_URL}/ana/person`)
        .then(res => {
            setProfile(res.data.profile)
        })
        .catch(err => console.log(err))
    }

    const choosePerson = (choice) => {
        const body={
            id:profile.id,
            choice: choice
        }
        axios
        .post(`${BASE_URL}/ana/choose-person`, body)
        .then(res => {
            console.log(res.data.isMatch)
            getProfileToChoose()
        })
        .catch(err => console.log(err))
    }


    return (
        <Container>
            <ProfileCard profile={profile}/>
            <Buttons>
                <button onClick={() => choosePerson(false)} ><AiOutlineCloseCircle /></button>
                <button onClick={() => choosePerson(true)} ><FcLike /></button>
            </Buttons>
        </Container>
    );
}
