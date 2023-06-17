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
`

export const Label = styled.label `
  font-size: 1.8rem;
  font-weight: 500;  
`

// export const PasswordContainer = styled.div `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: .1rem solid #efefef;
//   border-radius: 1rem;
//   background-color: var(--white);

//   input {
//     border: none;
//   }
// `

// export const ButtonEyes = styled.button `
//   background: none;
//   border: none;
// `