import { styled } from "styled-components";

export const Container = styled.footer `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10rem 15rem;
  background-color: var(--white);
`

export const Items = styled.div `
  img {
    width: 20rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    li {
      padding: 1.2rem 0;
    }
  }

  nav {
    ul {
      display: flex;
      margin-top: 1.5rem;
      gap: 1.5rem;
    }
  }
`

export const Copy = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 15rem;
  border-top: .1rem solid rgba(0, 0, 0, .1);
  font-size: 1rem;

  ul {
    display: flex;
    gap: 1rem;
  }
`