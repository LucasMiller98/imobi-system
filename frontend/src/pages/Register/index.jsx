import * as S from './styles/styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { api } from '../../services/api' 
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function Register() {

  const navigation = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnChangeInputValue = (event) => {
    return setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const users = {
        name: data.name, 
        password: data.password, 
        email: data.email, 
        confirmPassword: data.confirmPassword
      }
      
      const response = await api.post('/createUsers', users)

      const { message }  = response.data
      
      if(!users.name || !users.password || !users.email || !users.confirmPassword) {
        throw new Error(message)
      }
      
      if(users.password !== users.confirmPassword) {
        throw new Error(message)
      }

      const { error } = response.data
      
      if(!error) {
        navigation('/login')
        return toast.success(response.data.message)
      }

      throw new Error(response.data.message)
      
    } catch (error) {
      toast.error(error.message)
    }

  }

  return (
    <S.Container>
      <h2>Criar uma conta</h2>

      <p>Cadastre-se:</p>

      <S.FormContainer>
        <S.Form onSubmit={handleSubmit} autoComplete='off'>
          <S.Label htmlFor="email">Nome</S.Label>
          <Input 
            type='text'
            placeholder='Informe o seu nome'
            onChange={handleOnChangeInputValue}
            name='name'
          />
          
          <S.Label htmlFor="email">E-mail</S.Label>
          <Input 
            type='text'
            placeholder='exemple@exemple.com'
            onChange={handleOnChangeInputValue}
            name='email'
          />

          <S.Label htmlFor="password">Senha</S.Label>
          <Input 
            type='password'
            placeholder='Informe sua senha'
            onChange={handleOnChangeInputValue}
            name='password'
          />

          <S.Label htmlFor="password">Confirmação da senha</S.Label>
          <Input 
            type='password'
            placeholder='Confirmação da senha'
            onChange={handleOnChangeInputValue}
            name='confirmPassword'
          />
          
          <Button type='submit'>
            Cadastrar
          </Button>
          
        </S.Form>
      </S.FormContainer>
    </S.Container>
  )
}
