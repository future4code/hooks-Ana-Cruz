import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ContainerHome } from '../styles';


export class PageHome extends React.Component {
    render() {
        return (
            <ContainerHome>
                <img src={this.props.logo} />
                <h1>DatingDay's</h1>
                <p>Register now</p>
                <input placeholder="Name"
                    value={this.props.state.name}
                    onChange={this.props.onChangeName} ></input>
                <input placeholder="E-mail"
                    value={this.props.state.email}
                    onChange={this.props.onChangeEmail} ></input>
                <button onClick={this.props.onClickRegister} >Register</button>
                <button onClick={this.props.onClickSeeList} >See List</button>
            </ContainerHome>
        )
    }
}