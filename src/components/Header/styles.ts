import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.theme['violet-500']};
  max-height: 4rem;
  width: 100%;
  color: ${(props) => props.theme['gray-50']};
`

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: larger;

    @media only screen and (min-width: 300px) { 
      font-size: .75rem;
    }
  }
`
