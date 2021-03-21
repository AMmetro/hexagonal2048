import axios from 'axios'

export const APIgetData=(serverUrl,body)=>{

    const instance = axios.create({
        baseURL: serverUrl,
    })

            const promise = instance.post('2', body);
            return promise

}




