import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputItem from "../../components/InputItem";
import { BASE_URL, headers } from "../../constants";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useCreateTrip } from "../../hooks/useRequestData";
import { planets } from '../../constants/planets';


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

  const body = {
    name: inputName,
    planet: inputPlanet,
    date: inputDate,
    description: inputDescription,
    durationInDays: inputDurationInDays
  }

  const { post } = useCreateTrip()

  const renderPlanets = planets.map((planet, index) => {
    return <option key={index} value={planet} >{planet}</option>
  })

  return (
    <div>
      <button onClick={() => navigate(-1)} >Back</button>

      <InputItem type='text' placeholder='Name' value={inputName}
        onChange={(ev) => onChangeInputName(ev)} />
      <select value={inputPlanet} onChange={(ev) => onChangeInputPlanet(ev)} >
        <option value='' >Planetas</option>
        {renderPlanets}
      </select>
      <InputItem type='date' placeholder='Date' value={inputDate}
        onChange={(ev) => onChangeInputDate(ev)} />
      <InputItem type='text' placeholder='Description' value={inputDescription}
        onChange={(ev) => onChangeInputDescription(ev)} />
      <InputItem type='number' placeholder='Duration (in days)' value={inputDurationInDays}
        onChange={(ev) => onChangeInputDurationInDays(ev)} />

      <button onClick={() => post(`${BASE_URL}/trips`, body, headers)} >Create</button>
    </div>
  );
}

export default CreateTripPage