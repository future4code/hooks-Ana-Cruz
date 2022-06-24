import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RenderTrips from '../../components/RenderTrips';
import { BASE_URL } from '../../constants';

const ListTripsPage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('tokenLabeX')

  return (
    <div>
      <button onClick={() => navigate(-1)} >Back</button>
      <RenderTrips token={token} />
    </div>
  );
}

export default ListTripsPage