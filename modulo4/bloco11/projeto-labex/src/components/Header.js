import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 8vh;
    /* background-color: pink; */
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Header = () => {

    return (
        <Container>
            <h1>LabeX</h1>
        </Container>
    );
}

export default Header