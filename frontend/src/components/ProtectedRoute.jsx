import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../store/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../store/constants";
import { useEffect, useState } from "react";


function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(null)
    const home = "foluwaderibigbe"

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("user/token/refresh/", {refresh: refreshToken})
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                if (res.data.refresh) {
                    localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                }
                setIsAuthorized(true)
            }
        } catch (error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token) {
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAuthorized(true)
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }
    return isAuthorized ? children : <Navigate to={`/${home}/login`}/>
}

export default ProtectedRoute