import './App.css';
import React from 'react';
import { AppDad, Container, Input, Tarefas } from './styled';


class App extends React.Component {
  state = {
    listaTarefas: [],
    textoNovo: '', //input
    filtro: ''
  }

  componentDidMount() {
    console.log('DID MOUNTTTTTTTTT')
    // this.pegaLista()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.listaTarefas !== this.state.listaTarefas){
      this.salvaLista()
    }
  }

  pegaLista = () => {
    const stringLista = localStorage.getItem('LISTA DE TAREFAS')
    const objetoListaFinal = JSON.parse(stringLista)
    this.setState({ listaTarefas: objetoListaFinal })
  }

  salvaLista = () => {
    const objetoListaFinal = [...this.state.listaTarefas]
    localStorage.setItem('LISTA DE TAREFAS', JSON.stringify(objetoListaFinal))
  }

  adicionarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.textoNovo,
      completa: false
    }
    const novaListaDeTarefas = [...this.state.listaTarefas, novaTarefa]
    this.setState({ listaTarefas: novaListaDeTarefas })
  }

  onChangeNovaTarefa = (event) => {
    this.setState({ textoNovo: event.target.value })
  }

  alterarTarefa = (id) => {
    const novaListaDeTarefas = this.state.listaTarefas.map(
      (tarefa) => {
        if (id === tarefa.id) {
          const novaTarefa = {
            ...tarefa,
            completa: !tarefa.completa
          }
          return novaTarefa
        } else {
          return tarefa
        }
      }
    )
    this.setState({ listaTarefas: novaListaDeTarefas })
  }

  onChangeFiltro = (event) => {
    this.setState({ filtro: event.target.value })
  }

  apagarTarefa = (id) => {
    const novaListaDeTarefas = this.state.listaTarefas.filter(
      (tarefa) => {
        return id !== tarefa.id
      }
    )
    this.setState({ listaTarefas: novaListaDeTarefas })
  }

  render() {
    console.log(this.state.listaTarefas)
    const listaTarefaFiltradas = this.state.listaTarefas.filter(
      (tarefa) => {
        switch (this.state.filtro) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      }
    )

    return (
      <AppDad>
        <Container>
          <Input>
            <input onChange={this.onChangeNovaTarefa}
              value={this.state.textoNovo} placeholder='Tarefa' />
            <button onClick={this.adicionarTarefa}
            >Adicionar</button>
            <select value={this.state.filtro} onChange={this.onChangeFiltro}>
              <option value='' >Nenhum</option>
              <option value='pendentes' >Pendentes</option>
              <option value='completas' >Completas</option>
            </select>
          </Input>
          <h2>Tarefas</h2>
          {listaTarefaFiltradas.map((tarefa) => {
            return (
              <Tarefas key={tarefa.id}>
                <p>{tarefa.texto} - {tarefa.completa
                  ? "Completa" : "Pendente"} </p>
                <button onClick={() => this.alterarTarefa(tarefa.id)}
                >Alterar Status</button>
                <button onClick={() => this.apagarTarefa(tarefa.id)}
                >Apagar Tarefa</button>
              </Tarefas>
            )
          })}
        </Container>
      </AppDad>
    );
  }
}

export default App;
