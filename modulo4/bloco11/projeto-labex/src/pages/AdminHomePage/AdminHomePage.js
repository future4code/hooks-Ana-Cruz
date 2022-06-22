import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import axios from 'axios';

const AdminHomePage = () => {
  const navigate = useNavigate()

  useProtectedPage('/login')
  
  return (
    <div>
      <button onClick={() => navigate(-1)} >Back</button>
      <button onClick={() => navigate('/admin/trips/create')} >Create Trip</button>
      <button onClick={() => navigate('/admin/trips/')} >Trip Details</button>
    </div>
  );
}

export default AdminHomePage