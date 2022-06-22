import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InputItem from "../../components/InputItem";
import { BASE_URL } from "../../constants";
import axios from 'axios';


const LoginPage = () => {
  const navigate = useNavigate()
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const onChangeEmail = (ev) => {
    setInputEmail(ev.target.value)
  }

  const onChangePassword = (ev) => {
    setInputPassword(ev.target.value)
  }

  const login = () => {
    const body = {
      email: inputEmail,
      password: inputPassword
    }

    axios.post(`${BASE_URL}/login`, body)
      .then(res => {
        console.log(res)
        localStorage.setItem("tokenLabeX", res.data.token)
        navigate('/AdminHomePage')
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <button onClick={() => navigate('/')} >Voltar</button>
      <InputItem type='text' placeholder='E-mail' value={inputEmail}
        onChange={(ev) => onChangeEmail(ev)} />
      <InputItem type='password' placeholder='Password' value={inputPassword}
        onChange={(ev) => onChangePassword(ev)} />
      <button onClick={login} >Login</button>
    </div>
  );
}

export default LoginPage