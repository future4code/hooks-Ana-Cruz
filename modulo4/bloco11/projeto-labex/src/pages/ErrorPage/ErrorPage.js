import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate()


    return <div>
        <h1>Eror 404!</h1>
        <p>Esa página não existe!</p>
        <button onClick={() => navigate('/')} >Return</button>
    </div>
}

export default ErrorPage