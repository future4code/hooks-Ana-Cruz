import { useState } from "react";
import { ChoiceMatch } from "./components/ChoiceMatch";
import { Header } from "./components/Header";
import { ListMatch } from "./components/ListMatch";
import { GlobalStyle } from "./GlobalStyle";
import { Container, Main } from "./styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
  },
});


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


  return (
    <Main>
      <ThemeProvider theme={outerTheme}>
        <Container>
          <GlobalStyle />
          <Header currentPage={currentPage} changePage={changePage} />
          <hr />
          {changeCurrentPage()}
        </Container>
      </ThemeProvider>
    </Main>
  );
}

export default App;
