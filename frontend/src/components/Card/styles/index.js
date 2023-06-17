import { styled } from "styled-components";

export const Container = styled.div `
  width: 25rem;
  margin-bottom: 1.2rem;
  background-color: var(--white);
  box-shadow: .2rem .2rem .2rem .2rem rgba(0, 0, 0, .1);
  border-radius: 1rem;
`

export const Figure = styled.figure `
  width: 100%;
  
  img {
    border-radius: 1rem;
    width: 100%;
    height: auto;
  }
`

export const Description = styled.div `
  padding: 1.2rem;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);
  }

  h4 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  > a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .7rem;
    border-radius: 1rem;
    transition: all ease-in-out .2s;
  }

  > a:hover {
    background-color: var(--gray);
  }
`

export const Items = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  
  span {
    margin-bottom: 1rem;
  }
`