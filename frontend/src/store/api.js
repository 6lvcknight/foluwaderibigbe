import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
  }
})

// Request interceptor to add the access token to the headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor to handle 401 errors and refresh the token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true
            try {
                const refreshToken = localStorage.getItem(REFRESH_TOKEN)
                const res = await axios.post(`${import.meta.env.VITE_API_URL}user/token/refresh/`, {
                    refresh: refreshToken
                })
                const newAccessToken = res.data.access
                localStorage.setItem(ACCESS_TOKEN, newAccessToken)

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return api(originalRequest)
            } catch (refreshError) {
                console.error('Refresh token failed:', refreshError)
                localStorage.removeItem(ACCESS_TOKEN)
                localStorage.removeItem(REFRESH_TOKEN)
                window.location.href = '/login' // Redirect to login page
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export default api