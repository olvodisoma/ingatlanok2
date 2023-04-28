import axios from 'axios'
let url='http://localhost:5000'

export const getEstates = async () =>{
    const response = await axios.get(url+'/')
    return response
}

export const getSeller = async ({queryKey}) =>{
    const response = await axios.get(url+'/'+queryKey[1])
    return response
}