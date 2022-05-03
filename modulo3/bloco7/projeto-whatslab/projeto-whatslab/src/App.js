import './App.css';
import styled from "styled-components"
import { AppDad } from './AppStyles';
import Main from './components/Main/Main';
import GlobalStyle from './GlobalStyles';



function App() {
  return (
    <AppDad>
      <GlobalStyle />
      <Main />
    </AppDad>
  );
}

export default App;
