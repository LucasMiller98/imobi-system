import * as S from './styles'
import { urlApi } from '../../services/api'

export function TopBanner(props) {

  const imgURL = `${urlApi}/uploads/${props.thumb}`
  
  return (
    <S.Container style={{
      backgroundImage: `url(${imgURL})`
    }}>
      <S.Text>
        <h2>{ props.title }</h2>
        <p>
          { props.description }
        </p>
      </S.Text>
    </S.Container>
  )
}