import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InputItem from "../../components/InputItem";
import { BASE_URL } from "../../constants";
import axios from 'axios';
import { useProtectedPage } from "../../hooks/useProtectedPage";


const CreateTripPage = () => {
  const navigate = useNavigate()

  useProtectedPage('/login')

  const [inputName, setInputName] = useState('')
  const [inputPlanet, setInputPlanet] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [inputDurationInDays, setInputDurationInDays] = useState('')

  const onChangeInputName = (ev) => {
    setInputName(ev.target.value)
  }

  const onChangeInputPlanet = (ev) => {
    setInputPlanet(ev.target.value)
  }

  const onChangeInputDate = (ev) => {
    setInputDate(ev.target.value)
  }

  const onChangeInputDescription = (ev) => {
    setInputDescription(ev.target.value)
  }

  const onChangeInputDurationInDays = (ev) => {
    setInputDurationInDays(ev.target.value)
  }

  const createTrip = () => {
    const body = {
      name: inputName,
      planet: inputPlanet,
      date: inputDate,
      description: inputDescription,
      durationInDays: inputDurationInDays
    }
    const headers = {
      auth: localStorage.getItem('tokenLabeX')
    }
    axios.post(`${BASE_URL}/trips`, body, headers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  

  return (
    <div>
      <button onClick={() => navigate(-1)} >Back</button>
      <InputItem type='text' placeholder='Name' value={inputName}
        onChange={(ev) => onChangeInputName(ev)} />
      <InputItem type='text' placeholder='Planet' value={inputPlanet}
        onChange={(ev) => onChangeInputPlanet(ev)} />
      <select>
        <option>Planetas</option>
      </select>
      <InputItem type='date' placeholder='Date' value={inputDate}
        onChange={(ev) => onChangeInputDate(ev)} />
      <InputItem type='text' placeholder='Description' value={inputDescription}
        onChange={(ev) => onChangeInputDescription(ev)} />
      <InputItem type='number' placeholder='Duration (in days)' value={inputDurationInDays}
        onChange={(ev) => onChangeInputDurationInDays(ev)} />
      <button onClick={() => createTrip()} >Create</button>
    </div>
  );
}

export default CreateTripPage