import React from 'react'
import * as S from './styles'
import Logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {

  const userLogged = localStorage.getItem('user')

  const navigate = useNavigate()
  
  const handleLogout = () => {
    localStorage.clear()
    // window.location.href = '/login'
  }
 
  return (
    <S.Container>
      <S.Logo>
        <Link title='voltar para home' to='/'>
          <img src={ Logo } alt="Logo da imobiliária" />
        </Link>
      </S.Logo>

      <S.Menu>
        <ul>
          <li>
            { !userLogged ? (
              <Link to='/login'>Login/Cadastro</Link>
              ) : (
              <Link onClick={handleLogout}>Logout</Link>
            ) }
          </li>
          <li>
            <Link to='#'>Sobre mim</Link>
          </li>
          <li>
            <Link to='#'>Projetos</Link>
          </li>
        </ul>
      </S.Menu>
    </S.Container>
  )
}
