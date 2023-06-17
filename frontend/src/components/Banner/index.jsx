import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export function Banner() {

  const navigate = useNavigate()

  const handleNavigateToProfile = () => {
    navigate('/profile')
  }
  
  return (
    <S.Container>
      <S.Text>
        <h2>Discover The Beauty of Your Next Flat</h2>
        <p>Thousands of people have their flats up for grabs. Don't miss your chance to grab your own house today.</p>
        <button 
          onClick={handleNavigateToProfile} 
          type='button'
        >
          Cadastre seu anúncio
        </button>
      </S.Text>
    </S.Container>
  )
}