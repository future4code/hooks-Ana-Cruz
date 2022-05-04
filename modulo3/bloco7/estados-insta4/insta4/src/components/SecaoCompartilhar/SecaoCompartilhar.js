import React from 'react'
import { CardDiv, ShareContainer } from '../SecaoCompartilhar/styled'
import iconeInstagram from '../../img/instagram-icon.svg'
import iconeFacebook from '../../img/facebook-icon.svg'
import iconeTwitter from '../../img/twitter-icon.svg'

export class SecaoCompartlhar extends React.Component {
    state = {
        rede: ["Instagram", "Facebook", "Twitter"],
        clicado: false
    }

onClickMsg(rede) {
    if(this.state.clicado) {this.setState({ clicado: !this.state.clicado })}
    alert(`Post compartilhado no ${rede}`)
}

    render() {
        return (
            <ShareContainer>
                <CardDiv
                key="Instagram"
                onClick={() => this.onClickMsg(this.state.rede[0])}>
                    <img src={iconeInstagram} />
                </CardDiv>
                <CardDiv
                key="Facebook"
                onClick={() => this.onClickMsg(this.state.rede[1])}>
                    <img src={iconeFacebook} />
                </CardDiv>
                <CardDiv
                key="Twitter"
                onClick={() => this.onClickMsg(this.state.rede[2])}>
                    <img src={iconeTwitter} />
                </CardDiv>
            </ShareContainer>
        )
    }
}