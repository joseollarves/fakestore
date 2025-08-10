import axios from 'axios'

const fakestore = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
})

export default fakestore
