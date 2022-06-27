import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* ------------ GET ------------ */
export const useListTrips = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setISLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setISLoading(true)
            axios.get(url)
            .then(res => {
                setData(res.data.trips)
                setISLoading(false)
            })
            .catch(err => {
                setISLoading(false)
                setError(err)
            })
    }, [url])

    return [data, isLoading, error]
}


export const useTripDetails = () => {
    const [data, setData] = useState(undefined)
    const [isLoading, setISLoading] = useState(false)
    const [error, setError] = useState('')

    const getFunction = (url, headers) => {
        setISLoading(true)
            axios.get(url, headers)
            .then(res => {
                setData(res.data.trip)
                setISLoading(false)
            })
            .catch(err => {
                setISLoading(false)
                setError(err)
            })
    }

    return [data, isLoading, error, getFunction]
}

/* ------------ POST ------------ */
export const useApplyToTrip = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const post = (url, body) => {
            axios.post(url, body)
            .then(res => {
                alert(res.data.message)
                navigate('/trips/list')
            })
            .catch(err => {
                alert(err.message)
                setError(err)
            })
    }
    return [error, post]
}

export const useCreateTrip = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const post = (url, body, headers) => {
            axios.post(url, body, headers)
            .then(res => {
                alert("Viagem Criada com Sucesso!")
                navigate('/admin')
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }
    return [error, post]
}

/* ------------ DELETE ------------ */
export const useDeleteTrip = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const del = (url, headers) => {
            axios.delete(url, headers)
            .then(res => {
                alert("Viagem Deletada com Sucesso!")
                navigate('/admin')
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }
    return [error, del]
}

/* ------------ PUT ------------ */
export const useApproveCandidate = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const putFuncion = (url, body, headers, id) => {
            axios.put(url, body, headers)
            .then(res => {
                console.log(res)
                navigate(`/admin/trips/${id}`)
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }
    return [error, putFuncion]
}