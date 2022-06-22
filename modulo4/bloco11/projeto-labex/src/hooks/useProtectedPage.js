import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const useProtectedPage = (pageReturn) => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenLabeX')

        if(!token){
            navigate(pageReturn)
        }
    }, [navigate])
}