import { BASE_URL } from "../../constants";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from 'axios';

const TripDetailsPage = () => {
  const [tripDetails, setTripDetails] = useState({})

  const navigate = useNavigate()
  // const pathParams = useParams()
  // acesso dessa forma pathParams.id

  //mas posso acessar diretamente desestruturando e pegar o conteúdo
  const { id } = useParams()

  useProtectedPage('/login')

  useEffect(() => {
    const headers = {
      headers: {
        auth: localStorage.getItem('tokenLabeX')
      }
    }

    axios.get(`${BASE_URL}/trip/${id}`, headers)
      .then(res => {
        setTripDetails(res.data.trip)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <div>
      <button onClick={() => navigate(-1)} >Back</button>
      <h1>Detalhes</h1>
      <h2>Viagem: {tripDetails.name}</h2>
      <p>{tripDetails.description}</p>
      <p>Destino: {tripDetails.planet}</p>
      <p>Duração: {tripDetails.durationInDays} dias</p>
      <p>Data da viagem: {tripDetails.date}</p>
      <div>
        <h1>Candidatos</h1>
        {tripDetails.candidates?.map((candidate, index) => {
          return <div key={index}>
            <h2>Name: {candidate.name}</h2>
            <p>Age: {candidate.age}<br />
              Country: {candidate.country}<br />
              Profession: {candidate.profession}<br />
              Description: {candidate.applicationText}</p>
          </div>
        })}
      </div>
    </div>
  );
}

export default TripDetailsPage