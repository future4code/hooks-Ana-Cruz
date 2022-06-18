import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const navigator = useNavigate()
  
  return (
    <div>
      <button onClick={() => navigator(-1)} >Voltar</button>
      <h1>Admin Home Page</h1>
    </div>
  );
}

export default AdminHomePage