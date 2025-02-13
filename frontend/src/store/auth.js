import { ACCESS_TOKEN } from "../store/constants";
import { jwtDecode } from "jwt-decode";


const checkAuth = () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
        return false;
    }

    try {
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration > now) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Invalid token:", error);
        return false;
    }
};

export default checkAuth;