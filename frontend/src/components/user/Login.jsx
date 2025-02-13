import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../store/api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../store/constants'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await api.post('user/token/', { email, password })
      localStorage.setItem(ACCESS_TOKEN, response.data.access)
      localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
      navigate('/foluwaderibigbe/')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div div="flex min-h-screen items-center justify-center ">
      <form className="max-w-sm mx-auto flex flex-col items-center">
        <div className="mb-5 w-2/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} className="border rounded-sm text-neutral-400 text-sm border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700 block w-full p-2.5" placeholder="email" required />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} className="border rounded-sm text-neutral-400 text-sm border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700 block w-full p-2.5" required />
        </div>
        <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">Submit</button>
      </form>
    </div>


  )
}

export default Login;