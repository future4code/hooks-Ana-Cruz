import axios from "axios";
import { useState } from "react";
import { ChoiceMatch } from "./components/ChoiceMatch";
import { Header } from "./components/Header";
import { ListMatch } from "./components/ListMatch";
import { BASE_URL } from "./constants";
import { GlobalStyle } from "./GlobalStyle";
import { Button1, Container, Main } from "./styles";


function App() {
  const [currentPage, setCurrentPage] = useState('ChoiceMatch')

  const changeCurrentPage = () => {
    switch (currentPage) {
      case 'ChoiceMatch':
        return <ChoiceMatch />
      case 'ListMatch':
        return <ListMatch />
      default:
        return <h1>Página não encontrada</h1>
    }
  }

  const changePage = (currentPageName) => {
    setCurrentPage(currentPageName)
  }

  const clear = () => {
    axios
    .put(`${BASE_URL}/clear`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <Main>
      <Container>
        <GlobalStyle />
        <Header currentPage={currentPage} changePage={changePage} />
        <hr />
        {changeCurrentPage()}
      </Container>
      <Button1 onClick={() => clear()} >Clear</Button1>
    </Main>
  );
}

export default App;
