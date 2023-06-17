import * as S from './styles/styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useContextApi } from '../../context/hooks/useContextApi'
import { useState } from 'react'

export function Login() {

  const { 
    authenticate,
  } = useContextApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    await authenticate(email, password)
  }

  return (
    <S.Container>
      <h2>Acesse sua conta</h2>

      <p>Entre com seu e-mail e senha:</p>

      <S.FormContainer>
        <S.Form onSubmit={handleLogin}>
          <S.Label htmlFor="email">E-mail</S.Label>
          <Input 
            type='text'
            value={email}
            placeholder='Informe o seu e-mail'
            onChange={event => setEmail(event.target.value)}
          />

          <S.Label htmlFor="password">Senha</S.Label>
          <Input 
            type='password'
            value={password}
            placeholder='Informe sua senha'
            onChange={event => setPassword(event.target.value)}
          />
          
          <Button type='submit'>
            Fazer Login
          </Button>

          <Link className='anchor-register-user' to='/register'>
            Criar conta
          </Link>
          
        </S.Form>
      </S.FormContainer>
    </S.Container>
  )
}
