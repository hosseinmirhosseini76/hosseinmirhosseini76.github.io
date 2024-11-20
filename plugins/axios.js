import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const axiosInstance = axios.create({
        baseURL: config.public.apiBaseUrl || 'http://localhost:8000/api/',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    // Optionally, you can add interceptors here
    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                // Handle unauthorized error
                nuxtApp.$pinia.state.value.auth.token = null
                delete nuxtApp.$axios.defaults.headers.common['Authorization']
                localStorage.setItem('token', '')
                nuxtApp.$router.push('/login')
            }
            return Promise.reject(error)
        }
    )

    // Make Axios instance available globally via $axios
    nuxtApp.provide('axios', axiosInstance)
})
