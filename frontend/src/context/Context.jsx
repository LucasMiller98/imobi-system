import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { getLocalStorage } from './utils/getLocalStorage'
import { saveUserOnLocalStorage } from './utils/localStorage'

export const Context = createContext({})

export const ProviderContext = ({ children }) => {

  const [user, setUser] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const user = getLocalStorage()
    
    if(user) {
      setUser(user)
      console.log('Usuário logado.')
    }
  }, [])

  const authenticate = async (email, password) => {

    try {

      const { data } = await api.post('/login', { email, password })

      if(!password || !email) {
        return toast.info('Primeiro informe o seu e-mail e sua senha!')
      }

      const { message } = data
      
      if(message) {
        throw new Error(message)
      }

      const { email: e_mail } = data

      const payload = { token: data.token, e_mail }
      setUser(payload)
      saveUserOnLocalStorage(payload)
      navigate('/profile')
      
      return toast.info(`Bem-vindo ${data.name}`)

    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = () => {
    setUser(null)
    saveUserOnLocalStorage(null)
  }
  
  return (
    <Context.Provider value={{
      authenticate,
      ...user,
      logout
    }}>
      { children }
    </Context.Provider>
  )
}