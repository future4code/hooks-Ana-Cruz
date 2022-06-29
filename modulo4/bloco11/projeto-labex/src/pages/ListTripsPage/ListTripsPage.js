import { useNavigate } from 'react-router-dom';
import RenderTrips from '../../components/RenderTrips';
import { Button } from './styleListTripsPage';

const ListTripsPage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('tokenLabeX')

  return (
    <div>
      <Button onClick={() => navigate(-1)} >Back</Button>
      <RenderTrips token={token} />
    </div>
  );
}

export default ListTripsPage