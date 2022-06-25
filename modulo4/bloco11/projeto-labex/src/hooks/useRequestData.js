import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
            axios.get(url)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.message))
    }, [url])

    return data
}