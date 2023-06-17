import { styled } from "styled-components";

export const Container = styled.div`
  padding: 2rem 15rem;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  width: 70%;
  padding: 1rem;
  border: .1rem solid rgba(0, 0, 0, .1);
`
export const Thumb = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: .5rem;
  }
`

export const Description = styled.div `
  padding: 3rem 0;

  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  p {
    line-height: 2rem;
    font-size: 1.7rem;
  }

  h2, p {
    color: var(--secondary);
  }
  
`

export const Right = styled.div`
  width: 28%;
  padding: 1rem;
  border: .1rem solid rgba(0, 0, 0, .1);
  border-radius: .5rem;
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProfileDescription = styled.div`
  h3, p {
    /* margin-bottom: 1.5rem; */
    color: var(--secondary);
  }
`

export const ProfileFormContact = styled.div`
  line-height: 3rem;
`

export const Figure = styled.figure`
  width: 22.5rem;
  margin-right: 1rem;

  img {
    width: 100%;
    height: auto;
    border-radius: .5rem;
  }
`

export const ProfileContact = styled.div `
  line-height: 3rem;
`