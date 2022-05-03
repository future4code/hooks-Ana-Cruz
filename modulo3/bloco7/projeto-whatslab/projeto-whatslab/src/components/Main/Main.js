import React from "react";
import styled from "styled-components";
import { AppContainer, CardMensagem, ChatContainer, ChatContainerDivEu, ChatContainerDivOutro, EnterContainer, CardH4, CardP, DivNeutra, InputStyle } from "../../AppStyles";
import GlobalStyle from "../../GlobalStyles";


export class Main extends React.Component {
  state = {
    listaMensagem: [{
      remetente: "",
      mensagem: ""
    }],
    nome: "",
    msg: ""
  }

  onChangeRemetente(event) {
    this.setState({ remetente: event.target.value })
  }

  onChangeMensagem(event) {
    this.setState({ mensagem: event.target.value })
  }

  onClickEnviar() {
    const novaListaMensagem = [
      ...this.state.listaMensagem,
      {
        remetente: this.state.remetente,
        mensagem: this.state.mensagem
      }
    ];
    this.setState({ listaMensagem: novaListaMensagem, mensagem: "" })
  }


  render() {
    const listaMensagemComponente = this.state.listaMensagem.map(
      (item, i) => {
        if (item.remetente === "eu") {
          return (
            <ChatContainerDivEu key={i}>
              <CardMensagem>
                {/* <CardH4>{item.remetente}</CardH4> */}
                <CardP>{item.mensagem}</CardP>
              </CardMensagem>
            </ChatContainerDivEu >
          )
        } else if (item.remetente === "") {
          return <DivNeutra></DivNeutra>
        } else if (item.remetente !== "eu"){
          return (
            <ChatContainerDivOutro key={i}>
              <CardMensagem>
                <CardH4>{item.remetente}</CardH4>
                <CardP>{item.mensagem}</CardP>
              </CardMensagem>
            </ChatContainerDivOutro>
          )
        }


      })

    return (
      <AppContainer>
        <ChatContainer>{listaMensagemComponente}</ChatContainer>
        <EnterContainer>
          <input placeholder='Usuario' value={this.state.remetente} onChange={(event) => this.onChangeRemetente(event)} />
          <input placeholder="Mensagem" value={this.state.mensagem} onChange={(event) => this.onChangeMensagem(event)} />
          <button onClick={() => this.onClickEnviar()}>Enter</button>
        </EnterContainer>
      </AppContainer>
    );
  }
}

export default Main;