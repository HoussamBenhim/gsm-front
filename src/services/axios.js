import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export default function services({
  _url,
  _method,
  _data = null,
  _headers = {
    'Content-Type': 'application/json'
  }
}) {
  const res = { response: null, error: null }
  var config = {
    method: _method,
    url: _url,
    headers: _headers,
    data: _data
  }
  console.log(config)
  axios(config)
    .then((res) => {
      console.log(res.data)
      res.response = res.data
    })
    .catch((err) => {
      res.error = err
    })
  return res
}
