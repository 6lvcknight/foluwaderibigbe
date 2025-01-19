import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import { jwtDecode } from "jwt-decode";
import { z } from 'zod'

const roles = z.enum(['admin', 'user'])

const TokenDataSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    username: z.string(),
})

export const decodeAccessToken = (accessToken) => TokenDataSchema.parse(jwtDecode(accessToken))

const authStore = createStore(
    devtools(
        (set, get) => ({
            accessToken: undefined,
            accessTokenData: undefined,
            refreshToken: undefined,

            actions: {
                setAccessToken: (accessToken) =>{
                    const accessTokenData = (() => {
                        try {
                            return accessToken ? decodeAccessToken(accessToken) : undefined
                        } catch (error) {
                            console.error(error)
                            return undefined
                        }
                    })()
                    set({
                        accessToken,
                        accessTokenData,
                    })
                },
                setRefreshToken: (refreshToken) => set({
                    refreshToken,
                }),
                init: () => {
                    const { setAccessToken, setRefreshToken } = get().actions
                    setAccessToken(CookieService.get(ACCESS_TOKEN_KEY))
                    setRefreshToken(CookieService.get(REFRESH_TOKEN_KEY))
                },
                clearTokens: () => set({
                    accessToken: undefined,
                    accessTokenData: undefined,
                    refreshToken: undefined,
                }),
            },
        }),
        {
            name: 'auth-store',
            enabled: !import.meta.env.PROD
        }
    )
)

const accessTokenSelector = (state) => state.accessToken
const accessTokenDataSelector = (state) => state.accessTokenData
const refreshTokenSelector = (state) => state.refreshToken
const actionsSelector = (state) => state.actions

// Getters
export const getAccessToken = () => accessTokenSelector(authStore.getState())
export const getAccessTokenData = () => accessTokenDataSelector(authStore.getState())
export const getRefreshToken = () => refreshTokenSelector(authStore.getState())
export const getActions = () => actionsSelector(authStore.getState())

// Auth Stor function
function useAuthStore(selector, equalityFn) {
    return useStore(authStore, selector, equalityFn)
}

// Hooks
export const useAccessToken = () => useAuthStore(accessTokenSelector)
export const useAccessTokenData = () => useAuthStore(accessTokenDataSelector)
export const useRefreshToken = () => useAuthStore(refreshTokenSelector)
export const useActions = () => useAuthStore(actionsSelector)