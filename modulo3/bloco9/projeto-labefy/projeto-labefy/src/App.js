import React from 'react';
import GlobalStyle from './GlobalStyle'
import { Main } from './components/Main';
import { AppDad } from './styled';
import { MainTeste } from './components/MainTeste/MainTeste';

class App extends React.Component {

  render(){
    return (
      <AppDad>
      <GlobalStyle />
      {/* <Main /> */}
      <MainTeste />
    </AppDad>
    );
  }
}

export default App;
