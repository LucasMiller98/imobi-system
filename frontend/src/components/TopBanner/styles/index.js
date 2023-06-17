import { styled } from "styled-components";
import { urlApi } from '../../../services/api'

export const Container = styled.div `
  padding: 5rem 15rem;
  position: relative;
  background-size: cover;
  background-position: center;

  &:before {
    background-color: rgba(0, 0, 0, .6);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

export const Text = styled.div `
  width: 55%;
  position: relative;
  z-index: 1;
  
  h2 {
    color: var(--white);
    font-size: 3.875rem;
    margin-bottom: 2.5rem;
  }

  p {
    color: var(--white);
    margin-bottom: 2.5rem;
  }
`