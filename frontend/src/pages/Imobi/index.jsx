import { TopBanner } from '../../components/TopBanner'
import * as S from './styles'
import profile from '../../images/github-profile.png'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { api, urlApi } from '../../services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export function Imobi() {

  const [data, setData] = useState({})
  const [client_name, setClientName] = useState('')
  const [client_email, setClientEmail] = useState('')
  const [client_message, setClientMessage] = useState('')

  const { userId } = data

  const { slug } = useParams()
  
  const requestOneImobi = async () => {
    try {
      const { data: data_slug } = await api.get(`/listImobis/${slug}`)

      setData(data_slug)
    } catch (error) {
      console.error(error.message)
    }
  }  

  useEffect(() => {
    requestOneImobi()
  }, [])

  const user = {
    client_email,
    client_message,
    client_name,
    userId
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {

      
      const response = await api.post('/createMessages', user)

      console.log(response.data)
      // const { error } = response.data
      
      // if(!error) {
      //   return toast.success(response.data.message)
      // }

      // throw new Error(response.data.message)
      
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  return (
    <>
      <TopBanner 
        title={data.type}
        description={data.description}
        thumb={data.thumb}
      />
      <S.Container>
        <S.Left>
          <S.Thumb>
            <img src={`${urlApi}/uploads/${data.thumb}`} alt="Thumb" />
          </S.Thumb>

          <S.Description>
            <h2>{data.type} / Alugar</h2>

            <h5>
              Endereço: { data.address }
            </h5>

            <h5>
              Cidade: { data.city }
            </h5>
            
            <p>
              { data.description }
            </p>
          </S.Description>
        </S.Left>

        <S.Right>
          <S.Profile>
            <S.Figure>
              <img src={ profile } alt="Meu perfil" />
            </S.Figure>

            <S.ProfileDescription>
              <h3>{ data.name }</h3>
              <p>{ data.description }</p>
            </S.ProfileDescription>
          </S.Profile>
          <S.ProfileContact>
            <h3>Informações para contato</h3>
            <p>{ data.phone }</p>
            <p>{ data.email }</p>
          </S.ProfileContact>

          <S.ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete='off'>
              
              <Input 
                type='hidden'
                value={userId}
              />
              
              <Input 
                value={client_name}
                onChange={event => setClientName(event.target.value)}
                type='text'
                placeholder='Nome'
              />
              <Input
                value={client_email}
                onChange={event => setClientEmail(event.target.value)}
                type='text'              
                placeholder='E-mail'
              />
              <TextArea 
                placeholder='Mensagem'
                value={client_message}
                onChange={event => setClientMessage(event.target.value)}
              ></TextArea>
              <Button type="submit">Enviar Mensagem</Button>
            </form>
          </S.ProfileFormContact>
          
        </S.Right>
      </S.Container>
    </>
  )
}