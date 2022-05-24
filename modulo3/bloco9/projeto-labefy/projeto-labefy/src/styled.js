import styled from 'styled-components'
import imgBackground from './img/background-img.png'

export const AppDad = styled.div`
    background-color: black;
    max-width: 100vw;
`

export const ImgContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${imgBackground});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 100vh;
`

export const TransparencyContainer = styled.div`
    background: rgba(0, 0, 0, 0.8); //usando rgba aplica a transparência apenas ao background
    width: 80vw;
    height: 90vh;
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: coral;
    h1{
        font-size: 1.7rem;
    }
`

export const PlaylistsContainer = styled.div`
    /* border: 1px solid green; */
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
    height: fit-content;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }
`

export const AllPlaylists = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    h2{
        align-self: center;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const DetailPlaylist = styled.div`
    border: 1px solid overscroll-behavior-block;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    width: 50%;
    h2{
        align-self: center;
    }
    img{
        max-width: 10%;
        height: auto;
        background-color: rgba(255, 127, 80, 0.8);
        border-radius: 50%;
        align-self: center;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Footer = styled.div`
    position: absolute;
    bottom: 4%;
`