import { styled } from "styled-components";

export const Container = styled.div `
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 3.3rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

`

export const FormContainer = styled.div `
  width: 37rem;

  background-color: var(--white);
  padding: 5rem;
  border-radius: 1rem;
`

export const Form = styled.form `

  input {
    margin-top: 1rem;
    border-radius: 1rem;
  }

  .anchor-register-user {
    color: #4b71fb;
    font-size: 1.8rem;
    text-decoration: underline;
    font-weight: 500;
  }

  button {
    margin-bottom: 1rem;
  }
`

export const Label = styled.label `
  font-size: 1.8rem;
  font-weight: 500;  
`
