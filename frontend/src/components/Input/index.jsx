import * as S from './styles/styles'

export function Input(props) {
  return (
    <S.Input value={props.value} { ...props } />
  )
}
