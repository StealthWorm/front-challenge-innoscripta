import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: .25rem;               
    }
    &::-webkit-scrollbar-track {
      background: transparent;       
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['blue-600']};    
      border-radius: 20px;
    }
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']}; */
  }

  input &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-600']};
  }

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font: 400 1rem/1.6  Nunito, sans-serif;
  }

  a {
    &:visited {
        text-decoration: none;
        color: ${(props) => props.theme['violet-500']};
      }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 87.5%;
  }
`
