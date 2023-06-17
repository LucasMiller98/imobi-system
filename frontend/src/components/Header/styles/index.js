import { styled } from "styled-components";

export const Container = styled.div `
  padding: 2.5rem 15rem;
  height: 9.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .1rem solid rgba(0, 0, 0, .1);
  background-color: var(--white);
`

export const Logo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30rem;
  }
`

export const Menu = styled.nav `
  ul {
    display: flex;
    gap: 1rem;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    font-size: 3.7rem;
    font-weight: 500;

    li {
      border: .1rem solid var(--gray);
      border-radius: 1rem;
      padding: 1rem;

      a {
        color: #000;
      }
      
      &:hover {
        background-color: var(--gray);
        cursor: pointer;
      }
    }
  }
`