import axios from './defaultAxios'

const getLoans = (query) => {
    return axios.get(`/data/?string=${query}`, {
        timeout: 5000
    })
}

const APIUtil = {
    getLoans
}
export default APIUtil