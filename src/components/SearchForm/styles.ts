import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  height: 100%;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${(props) => props.theme['violet-600']};
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
    background: ${(props) => props.theme['violet-600']};
    color: ${(props) => props.theme['gray-50']};
    
    text-decoration: none;

    &::placeholder {
      color: ${(props) => props.theme['purple-600']};
    }
  }
`
