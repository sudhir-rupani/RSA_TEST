import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'

export const fetchQuote = async () => {
  try {
     const { data } = await axios.get('quote')
     return data
  } catch (error) {
    alert('Error while calling Quote api ', JSON.parse(error))
  }
}
export const fetchAddons = async () => {
  try {
    const { data } = await axios.get('addons')
    return data
  } catch (error) {
    alert('Error while calling Addons api ', JSON.parse(error))
  }
}
