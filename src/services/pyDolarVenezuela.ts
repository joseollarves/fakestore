import axios from 'axios'

const pyDolarVenezuela = axios.create({
  baseURL: 'https://pydolarve.org/',
})

export default pyDolarVenezuela
