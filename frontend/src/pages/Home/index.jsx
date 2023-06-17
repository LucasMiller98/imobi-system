import { Card } from '../../components/Card'
import { Banner } from '../../components/Banner'
import * as S from './styles'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function Home() {

  const [imobi, setImobi] = useState([])

  const handleCards = async () => {
    try {
      const { data } = await api.get('/listImobis')

      setImobi(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    handleCards()
  }, [])

  return (
    <>
      <Banner />
      <S.Container>
        <S.Header>
          <S.Title>Find the property of your dreams!</S.Title>
        </S.Header>
        <S.Wrapper>

          { imobi.map(imobi => {
            return (
              <div key={imobi.id}>
                <Card 
                  type={imobi.type} 
                  thumb={imobi.thumb}
                  address={imobi.address}
                  city={imobi.city}
                  federativeUnit={imobi.federativeUnit}
                  value={imobi.value}
                  description={imobi.description}
                  name={imobi.name}
                  email={imobi.email}
                  phone={imobi.phone}
                  slug={imobi.slug}
                />
              </div>
            )
          }) }
          
        </S.Wrapper>
      </S.Container>
    </>
  )
}