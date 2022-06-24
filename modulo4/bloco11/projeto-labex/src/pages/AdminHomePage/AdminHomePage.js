import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import RenderTrips from '../../components/RenderTrips';

const AdminHomePage = () => {
  const navigate = useNavigate()
  
  const token = localStorage.getItem('tokenLabeX')

  useProtectedPage('/login')
  
  return (
    <div>
      <button onClick={() => navigate(-1)} >Back</button>
      <button onClick={() => navigate('/admin/trips/create')} >Create Trip</button>
      <RenderTrips token={token} />
    </div>
  );
}

export default AdminHomePage