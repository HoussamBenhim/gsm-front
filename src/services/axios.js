import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export default function services({
  url,
  method,
  body = null,
  headers = { accept: '*/*' }
}) {
  const res = { response: null, error: null }
  axios[method](url, JSON.parse(headers), JSON.parse(body))
    .then((res) => {
      res.response = res.data
    })
    .catch((err) => {
      res.error = err
    })
    .finally(() => {})
  return res
}
