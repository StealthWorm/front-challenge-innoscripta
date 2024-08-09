import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin: .5rem 0;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    background-color:  ${(props) => props.theme['purple-500']};
    transition: all .5s;

    color: ${(props) => props.theme['gray-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color:  ${(props) => props.theme['purple-600']};
    }
  }

  span {
    font-weight: bold;
    color: ${(props) => props.theme['violet-500']};
  }
`