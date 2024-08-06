import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.theme['violet-500']};
  max-height: 4rem;
  color: ${(props) => props.theme['gray-50']};
`

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: center; */
`
