import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const useTripDetails = (url, headers) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
            axios.get(url, headers)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.message))
    }, [url])

    return data
}