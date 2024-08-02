import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPassengers(perPage: number, page: number) {
    return apiClient.get(`/passenger?page=${page}&size=${perPage}`)
  },
  getPassenger(id: string) {
    return apiClient.get(`/passenger/${id}`)
  }
}
