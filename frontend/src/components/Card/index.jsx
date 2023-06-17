import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { urlApi } from '../../services/api'

export function Card(props) {

  return (
    <S.Container>
      <S.Figure>
        <img src={`${urlApi}/uploads/${props.thumb}`} alt="Thumb" />
      </S.Figure>
      <S.Description>
        <h4>{ props.type }</h4>
        <S.Items>
          <span>
            <FaMapMarkerAlt />
            { props.address }, { props.city }
          </span>
          <span>R${ props.value }</span>
        </S.Items>
        <Link to={`/imobi/${props.slug}`}>
          Detalhes <FaArrowRight />
        </Link>
      </S.Description>
    </S.Container>
  )
}