import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as S from './styles/styles'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

export function Profile() {

  const [data, setData] = useState([])

  // console.log(data)

  const [thumb, setThumb] = useState('')
  const [type, setType] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [federativeUnit, setFederativeUnit] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // const { id } = useParams()

  // const requestOneImobi = async () => {
    
  //   try {
  //     const { data: dataUserId } = await api.get(`/findOneUser/${id}`)

  //     setData(dataUserId)
      
  //   } catch (error) {
  //     toast.error(error.message)
  //   }
  // }

  // useEffect(() => {
  //   requestOneImobi()
  // }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {

      const headers = {
        'headers': {
          'Content-Type': 'multpart/form-data'
        }
      }

      const dataProfile = new FormData()

      dataProfile.append('thumb', thumb)
      dataProfile.append('type', type)
      dataProfile.append('address', address)
      dataProfile.append('city', city)
      dataProfile.append('federativeUnit', federativeUnit)
      dataProfile.append('value', value)
      dataProfile.append('description', description)
      dataProfile.append('name', name)
      dataProfile.append('email', email)
      dataProfile.append('phone', phone)
      
      // const { data } = await api.post('/createImobi', dataProfile, { headers })
      console.log(dataProfile, headers)

      // console.log(data)
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  return (
    <S.Container>
      <S.Left>
        <h2>Minhas mensagens</h2>
        {[1, 2, 3].map((item, index) => {
          return (
            <S.Message key={index}>
              <span>Nome: Lucas Miller</span>
              <span>Email: lucas.miller1998@outlook.com</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam repellendus temporibus ipsam minus sint fugit nulla molestiae at, nostrum soluta placeat error. Tempora accusamus mollitia quidem rem dolorem reprehenderit eveniet?
              </p>
            </S.Message>
          )
        })}
      </S.Left>

      <S.Right>
        <h2>Criar Anúncio</h2>
        
        <S.Form onSubmit={handleSubmit}>
          <Input
            type='file'
            value={thumb}
            onChange={event => setThumb(event.target.files[0])}
          />

          <Input 
            type='text'
            value={type}
            onChange={event => setType(event.target.value)}
            placeholder='Informe o tipo do imóvel: '
          />

          <Input 
            type='text'
            value={city}
            onChange={event => setCity(event.target.value)}
            placeholder='Informe o endereço do imóvel: '
          />
          <Input 
            type='text'
            value={federativeUnit}
            onChange={event => setFederativeUnit(event.target.value)}
            placeholder='Informe o a cidade do imóvel: '
          />
          <Input 
            type='text'
            value={value}
            onChange={event => setValue(event.target.value)}
            placeholder='UF: '
          />
          <Input 
            type='text'
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder='Informe o valor do imóvel: '
          />
          <Input 
            type='text'
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder='Descrição do imóvel: '
          />
          <Input 
            type='text'
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder='Informe seu nome: '
          />
          <Input 
            type='text'
            value={address}
            onChange={event => setAddress(event.target.value)}
            placeholder='Informe seu e-mail: '
          />
          <Input 
            type='text'
            value={phone}
            onChange={event => setPhone(event.target.value)}
            placeholder='Informe seu telefone: '
          />

          <Button type='submit'>
            Cadastrar imóvel
          </Button>
        </S.Form>
      </S.Right>
    </S.Container>
  )
}