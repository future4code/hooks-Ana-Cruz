import React from 'react';
import GlobalStyle from './GlobalStyle'
import { Main } from './components/Main/Main'
import { AppDad } from './styled';

class App extends React.Component {

  render() {
    return (
      <AppDad>
        <GlobalStyle />
        <Main />
      </AppDad>
    );
  }
}

export default App;
