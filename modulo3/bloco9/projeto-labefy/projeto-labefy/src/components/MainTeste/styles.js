import styled from 'styled-components'
import imgBackground from  '../../img/background-img.png';

export const ImgBackground = styled.section`
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

export const Transparency = styled.div`
    background: rgba(0, 0, 0, 0.8); //usando rgba aplica a transparência apenas ao background
    width: 80vw;
    height: 95vh;
`
