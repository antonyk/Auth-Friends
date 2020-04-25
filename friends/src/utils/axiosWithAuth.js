import axios from 'axios'

const url = 'https://auth-friends-api.herokuapp.com'

export default function axiosWithAuth() {
  const token = JSON.parse(localStorage.getItem('token'))
  // const token = localStorage.getItem('token')
  
  return axios.create({
    headers: {
      Authorization: token,

    },
    baseURL: url,
  })

}