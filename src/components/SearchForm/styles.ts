import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  height: 100%;
  border-radius: 6px 0 0 6px;
  border: 1px solid transparent;
  background: ${(props) => props.theme['gray-100']};
  padding: .5rem;
  align-items: center;
  gap: .5rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-600']};
  }

  svg {
    color: ${(props) => props.theme['purple-600']};
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid transparent;
    background: transparent;
    color: ${(props) => props.theme['purple-500']};
    
    text-decoration: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    @media only screen and (max-width: 600px) { 
      width: 4rem;
    }
  }
`
