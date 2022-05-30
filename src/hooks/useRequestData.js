import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import axios from 'axios'

const useRequestData = (path, initialState) => {

    const [data, setData] = useState(initialState)

    const getData = () => {
        
        axios
        .get(`${BASE_URL}/${path}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.message)
        })
    }

    useEffect(() => {
        getData()
    },[path])
  
    return [data, getData]
};

export default useRequestData