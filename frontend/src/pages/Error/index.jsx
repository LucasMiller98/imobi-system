import * as S from './styles/styles'
import { useRouteError } from 'react-router-dom'

export function Error() {

  const error = useRouteError()
  console.error(error)
  
  return (
    <S.Container>
      <h2>404</h2>
      <p>OOOOOPsssss...</p>
      <p>Page Not Found!</p>

      <p>
        <span>{ error.statusText || error.message }</span>
      </p>
      
    </S.Container>
  )
}
