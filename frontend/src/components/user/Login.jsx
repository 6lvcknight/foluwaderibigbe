import React from 'react'
import { login } from '../../store/api'
import { useAccessToken, getAccessToken } from '../../store/auth';

export const Login = () => {

    const handleLogin = async () => {
        try {
            const response = await login('foluwaderibigbe@gmail.com', 'foluwa8602');
            console.log('Login successful:', response);

            const { data, status } = response
            console.log(data)
        } catch (error) {
            console.error('Error logging in:', error.response?.data || error.message);
        }
    };

    const data = useAccessToken()
    console.log(data)

  return (
    <button onClick={handleLogin} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        login
    </button>
  )
}
