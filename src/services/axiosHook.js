import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const useAxios = ({
  url,
  method,
  body = null,
  headers = { accept: '*/*' }
}) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])

  return { response, error, loading }
}

export default useAxios
