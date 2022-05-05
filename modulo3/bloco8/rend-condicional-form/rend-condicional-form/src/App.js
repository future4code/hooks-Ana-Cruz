import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1/Etapa1';
import { Etapa2 } from './components/Etapa2/Etapa2';
import { Etapa3 } from './components/Etapa3/Etapa3';
import { EtapaFinal } from './components/EtapaFinal/EtapaFinal';
import { AppDad, Container } from './styles';


class App extends React.Component {
  state = {
    estadoEtapas: 1,
    comSuperior: false
  }

  irParaProximaEtapa = () => {
    this.setState({ estadoEtapas: this.state.estadoEtapas +1 })
  }
  

  paginaRenderizada = () => {
    switch (this.state.estadoEtapas) {
      case 1:
        return <Etapa1 proximaEtapa={this.irParaProximaEtapa} />
      case 2:
        return <Etapa2 proximaEtapa={this.irParaProximaEtapa} />
      case 3:
        return <Etapa3 proximaEtapa={this.irParaProximaEtapa} />
      case 4:
        return <EtapaFinal />
      default:
        <h3>Seção não encontrada</h3>
    }
  }

  render() {
    
  console.log(`APP: ${this.state.estadoEtapas}`)

    return (
      <AppDad>
        <Container>
          {this.paginaRenderizada()}
          { (this.state.estadoEtapas !== 4) &&
           <button onClick={this.irParaProximaEtapa} >
             Próxima Etapa</button>}
        </Container>
      </AppDad>
    );
  }
}

export default App;
