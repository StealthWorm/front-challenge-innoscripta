import styled from 'styled-components';

export const TextInputContainer = styled.div`
  background-color: ${(props) => props.theme['gray-300']};
  padding: .5rem 1rem;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: .5rem 0;
  justify-content: space-between;
  width: auto;
  position: relative;
  color:  ${(props) => props.theme['violet-500']};

  label {
    width: 30%;
    font-weight: bold;
  }

  &:has(input:focus) {
    border-color: ${(props) => props.theme['gray-300']};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 600px) { 
    width: 100%;
    justify-content: center;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  color:  ${(props) => props.theme['gray-500']};
  font-weight: regular;
  background: transparent;
  border: 0;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media only screen and (max-width: 600px) { 
    width: 10rem;
    /* flex-direction: column;
    margin-top: 20rem;
    right: 0; */
  }
`;
