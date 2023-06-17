import * as S from './styles/styles'

export function Button({ props, children }) {
  return (
    <S.Button { ...props }>
      { children }
    </S.Button>
  )
}
