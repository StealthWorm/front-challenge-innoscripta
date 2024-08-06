import styled, { keyframes } from 'styled-components'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

const scaleIn = keyframes`
from {
  transform: rotateX(-30deg) scale(0.9);
  opacity: 0;
}

to {
  transform: rotateX(0deg) scale(1);
  opacity: 1
}
`;

const scaleOut = keyframes`
from {
  transform: rotateX(0deg) scale(1);
  opacity: 1
}

to {
  transform: rotateX(-10deg) scale(0.95);
  opacity: 0
}
`;

const fadeIn = keyframes`
  from {
  opacity: 0
}
  to {
  opacity: 1
}
`;

const fadeOut = keyframes`
  from {
  opacity: 1
}
  to {
  opacity: 0
}
`;

export const NavigationFormContainer = styled.form`
 display: flex;
 width: 100%;

 button[type="submit"] {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: .5rem 1rem;
    background: ${(props) => props.theme['purple-500']};
    border: none;
    color: ${(props) => props.theme['gray-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['purple-600']};
      color: ${(props) => props.theme['gray-100']};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`

export const NavigationContainer = styled(NavigationMenu.Root)`
  display: flex;
  position: relative;
  width: 100vw;
  justify-content: space-between;
  z-index: 1;
`

export const NavigationList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme['gray-100']};
  padding: 4px;
  border-radius: 8px;
  list-style: none;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-600']};
  gap: 1rem;
  margin: 0;
`

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15;
  color: ${(props) => props.theme['purple-500']};
  transition: all .5s;
  animation-duration: 250ms;
  animation-timing-function: ease;
  cursor: pointer;

  &:focus { 
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-600']};
  };  

  &:hover { 
    background-color: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['gray-50']};
  };

  &[data-state="open"] { 
    svg {
      transform: rotateX(180deg);
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
`

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  /* position: absolute;
   top: 0;
  left: 10rem; */
  width: 100%;

  @media only screen and (min-width: 600px) { 
    width: auto;
  }

  animation-duration: 250ms;
  animation-timing-function: ease;
  padding: .5rem;
`

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: absolute;
  left: 0;
  transform-origin: top center;
  margin-top: 3rem;
  width: auto;
  overflow-y: scroll;
  background-color: ${(props) => props.theme['gray-50']};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme['gray-500']} 0px 10px 38px -10px;
  height: 6rem;
  transition: 300ms ease;
  gap: 1rem;
  
  &[data-state="open"] { 
    animation: ${scaleIn} 200ms ease;
  }

  &[data-state="closed"] { 
    animation: ${scaleOut} 200ms ease;
  }

  @media only screen and(min-width: 600px) {
    width: 100%;
  }
`;

export const NavigationMenuIndicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* height: 10px; */
  /* top: 100%;
  overflow: hidden;
  z-index: 1;
  transition: transform 250ms ease; */

  /* &[data-state="visible"] { 
    animation: ${fadeIn} 200ms ease };
  &[data-state="hidden"] { 
    animation: ${fadeOut} 200ms ease }; */
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


