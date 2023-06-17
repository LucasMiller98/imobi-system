import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp 
} from 'react-icons/fa'
import * as S from './styles'
import Logo from '../../images/logo.png'

export function Footer() {
  return (
    <>
      <S.Container>
        <S.Items>
          <img src={ Logo } alt="Logo da imobiliária" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt est, ea cumque excepturi dolores, doloribus ab iusto quidem quo pariatur adipisci molestiae omnis sint eum ut natus magnam porro praesentium.
          </p>

          <nav>
            <ul>
              <li><span><FaFacebook size={32} /></span></li>
              <li><span><FaInstagram size={32} /></span></li>
              <li><span><FaWhatsapp size={32} /></span></li>
            </ul>
          </nav>
        </S.Items>
        <S.Items>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </S.Items>
        <S.Items>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </S.Items>
        <S.Items>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </S.Items>
      </S.Container>
      <S.Copy>
        <p>&copy;Copyright 2023 - Workside Tecnologia All Rights Reserved.</p>
        <ul>
          <li><span>Termos de uso</span></li>
          <li><span>Poítica de privacidade</span></li>
          <li><span>Política de cookies</span></li>
        </ul>
      </S.Copy>
    </>
  )
}
