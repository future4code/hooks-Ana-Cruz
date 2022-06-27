import InputItem from "../../components/InputItem";
import { countries } from '../../constants/countries';
import { useState } from "react";
import { BASE_URL } from "../../constants/index";
import { useNavigate, useParams } from "react-router-dom";
import { useApplyToTrip } from "../../hooks/useRequestData";

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const { id } = useParams()

    const [inputName, setInputName] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [inputQuestion, setInputQuestion] = useState('')
    const [inputProfession, setInputProfession] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')

    const onChangeInputName = (ev) => {
        setInputName(ev.target.value)
    }

    const onChangeInputAge = (ev) => {
        setInputAge(ev.target.value)
    }

    const onChangeInputQuestion = (ev) => {
        setInputQuestion(ev.target.value)
    }

    const onChangeInputProfession = (ev) => {
        setInputProfession(ev.target.value)
    }

    const onChangeSelectCoutry = (ev) => {
        setSelectedCountry(ev.target.value)
    }

    const countriesComponents = countries.map((country, index) => {
        return <option key={index} value={country.label} >{country.label}</option>
    })

    const body = {
        name: inputName,
        age: inputAge,
        applicationText: inputQuestion,
        profession: inputProfession,
        country: selectedCountry
    }

    const { post } = useApplyToTrip()

    return (
        <div>
            <button onClick={() => navigate('/trips/list')} >Back</button>
            <InputItem type='text' placeholder='Name' value={inputName} onChange={(ev) => onChangeInputName(ev)} />
            <InputItem type='number' placeholder='Age' value={inputAge} onChange={(ev) => onChangeInputAge(ev)} />
            <InputItem type='text' placeholder='Why am I a good candidate?'
                value={inputQuestion} onChange={(ev) => onChangeInputQuestion(ev)} />
            <InputItem type='text' placeholder='Profession' value={inputProfession}
                onChange={(ev) => onChangeInputProfession(ev)} />
            <select value={selectedCountry} onChange={(ev) => onChangeSelectCoutry(ev)} >
                <option value='' >Select Country</option>
                {countriesComponents}
            </select>
            <button onClick={() => post(`${BASE_URL}/trips/${id}/apply`, body)} >Apply</button>
        </div>
    );
}

export default ApplicationFormPage