import './App.css';
import { Main } from './components/Main';
import GlobalStyle from './GlobalStyle';
import { AppDad } from './styles';




function App() {
  return (
    <AppDad>
    <GlobalStyle />
    <Main />
    {/* <Footer><p>&copy; All rights reserved | 2022</p></Footer> */}
  </AppDad>
  );
}

export default App;
