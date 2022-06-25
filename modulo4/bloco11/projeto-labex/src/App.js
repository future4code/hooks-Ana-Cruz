import Header from './components/Header';
import Router from './routes/Router';
import styled from 'styled-components';
import imgBackground from './img/background.jpg';
import GlobalStyle from './GlobalStyles';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`


const ContainerImg = styled.div`
  /* background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); 
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);  */
  background-image: url(${imgBackground});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Container2 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



function App() {


  return (
    <Container>
      <ContainerImg>
        <GlobalStyle />
        <Header />
        <Container2>
          <Router />
        </Container2>
      </ContainerImg>
    </Container>
  );
}

export default App;
