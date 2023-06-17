import { styled } from "styled-components";

export const Container = styled.div `
  padding: 2rem 15rem;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div `
  width: 49%;
  padding: 2rem;

  h2 {
    font-size: 2.7rem;
  }
`

export const Right = styled.div `
  width: 49%;
  padding: 2rem;

  h2 {
    font-size: 2.7rem;
  }
`

export const Form = styled.form `
  background-color: #fff;
  margin-top: 1rem;
  padding: 2.5rem;
`

export const Message = styled.div `
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
`