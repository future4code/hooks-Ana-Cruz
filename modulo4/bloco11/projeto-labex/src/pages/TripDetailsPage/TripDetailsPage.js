import { BASE_URL } from "../../constants";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from 'axios';

const TripDetailsPage = () => {
  const navigate = useNavigate()

  useProtectedPage('/login')

  useEffect(() => {
    const headers = {
      header: {
        auth: localStorage.getItem('tokenLabeX')
      }
    }
    axios.get(`${BASE_URL}/trip/id`)
    .then()
    .catch()
  }, [])
  
    return (
      <div>
        
      </div>
    );
  }

export default TripDetailsPage