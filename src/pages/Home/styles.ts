import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  /* padding:  1.5rem 5rem; */

  @media only screen and (max-width: 600px) { 
      padding:  0;
  }
`