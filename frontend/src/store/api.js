import { getActions, getAccessToken } from "./auth";
import axios from './axios'
import { z } from 'zod'

const { setAccessToken, setRefreshToken } = getActions()

export const login = async (email, password) => {
    try {
        const response = await axios.post('user/token/',
            { email, password },
        )
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        const accessToken = data.access
        const refreshToken = data.refresh
        
        console.log(data)
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        return {data, error: null}
    } catch (error) {
        console.error('Login failed:', error)
        throw error
    }
    
}