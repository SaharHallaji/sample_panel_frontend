import {defineNuxtPlugin} from "#app"
import axios from "axios"

export default defineNuxtPlugin(() =>
{
    let base = ""
    if (typeof window !== "undefined")
    {
        const sec = window.location.origin.split(":")
        base = `${sec[0]}:${sec[1]}:8000`
    }
    //TODO edit line 13
    axios.defaults.baseURL = ``

    let refresh = false

    axios.interceptors.response.use(resp => resp, async error =>
    {
        if (error.response.status === 401 && !refresh)
        {
            refresh = true

            const {status, data} = await axios.post('/jwt/refresh/', {})

            if (status === 200)
            {
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

                return axios(error.config)
            }

        }
        refresh = false

        return error
    })

    return {
        provide: {
            http: axios
        }
    }
})