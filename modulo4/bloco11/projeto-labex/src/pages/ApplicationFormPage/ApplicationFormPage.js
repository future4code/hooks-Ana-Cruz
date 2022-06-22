import InputItem from "../../components/InputItem";
import { countries } from '../../constants/countries';
import { useState } from "react";
import { BASE_URL } from "../../constants/index";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = (props) => {
    const navigate = useNavigate()

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

    const applyToTrip = () => {
        const body = {
            name: inputName,
            age: inputAge,
            applicationText: inputQuestion,
            profession: inputProfession,
            country: selectedCountry
        }

        axios.post(`${BASE_URL}/trips/${props.idTrip}/apply`, body)
            .then(res => {
                alert(res.data.message)
                props.returnTrip()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={() => navigate(-1)} >Back</button>
            <InputItem type='text' placeholder='Name' value={inputName} onChange={(ev) => onChangeInputName(ev)} />
            <InputItem type='number' placeholder='Age' value={inputAge} onChange={(ev) => onChangeInputAge(ev)} />
            <InputItem type='text' placeholder='Why am I a good candidate?'
                value={inputQuestion} onChange={(ev) => onChangeInputQuestion(ev)} />
            <InputItem type='text' placeholder='Profession' value={inputProfession}
                onChange={(ev) => onChangeInputProfession(ev)} />
            <select onChange={(ev) => onChangeSelectCoutry(ev)} >
                <option value='' >Select Country</option>
                {countriesComponents}
            </select>
            <button onClick={applyToTrip} >Apply</button>
        </div>
    );
}

export default ApplicationFormPage