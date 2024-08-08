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

export const NavigationFormContainer = styled.form`
 display: flex;
 flex: 1;
 position: relative;
 width: 100%;
 gap: 1rem;
 margin: 1rem 1.5rem;
 justify-content: center;

 button[type="submit"] {
  all: unset;
  width: auto;
  display: flex;
  align-items: center;
  gap: .75rem;
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

  &:before {
    content: 'Filter';

    @media only screen and (max-width: 600px) { 
      content: none;
    }
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['purple-600']};
    color: ${(props) => props.theme['gray-100']};
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;
  }

  @media only screen and (max-width: 600px) { 
    padding: 1rem;
    width: 100%;
    border-radius: 0;
    font-weight: 100;
    right: 0;
    top: 0;
    z-index: 2;
    align-items: center;
    justify-content: center;
  }
}

@media only screen and (max-width: 600px) { 
  gap: 0;
  margin: 0;
}
`

export const NavigationContainer = styled(NavigationMenu.Root)`
  display: flex;
  width: auto;
  justify-content: flex-start;
  z-index: 1;

  @media only screen and (max-width: 600px) { 
    justify-content: center;
  }
`

export const NavigationList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  align-items: center;  
  background: ${(props) => props.theme['gray-100']};
  padding: 4px;
  border-radius: 8px;
  list-style: none;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-600']};
  gap: .5rem;

  @media only screen and (max-width: 600px) { 
    gap: 0;
    border-radius: 0;
  }
`

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 100%;
  position: relative;
  padding: 8px 16px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 2;
  border-radius: 6px;
  font-size: 16px;
  color: ${(props) => props.theme['purple-500']};
  transition: all .5s;

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

  @media only screen and (max-width: 600px) { 
    display: flex;
    gap: .2rem;
    padding: 8px;
    outline: none;
    font-weight: 100;
    line-height: 2;
    border-radius: 0;
    font-size: 12px;
  }
`

interface ContentProps {
  orientation?: 'row' | 'column';
}

export const NavigationMenuContent = styled(NavigationMenu.Content) <ContentProps>`
  display: flex;
  position: relative;
  flex-direction: ${(props) => props.orientation ? props.orientation : 'column'};
  animation-duration: 250ms;
  animation-timing-function: ease;
  padding: .5rem;
  gap: 1rem;

  @media only screen and (max-width: 600px) { 
    width: 100%;
    flex-direction: column;
  }
`

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: absolute;
  margin-top: 4rem;
  left: 0;
  overflow-y: scroll;
  background-color: ${(props) => props.theme['gray-50']};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme['gray-500']} 0px 10px 38px -10px;
  min-height: auto;
  max-height: 10rem;
  transition: 300ms ease;
  gap: 1rem;
  
  &[data-state="open"] { 
    animation: ${scaleIn} 200ms ease;
  }

  &[data-state="closed"] { 
    animation: ${scaleOut} 200ms ease;
  }
`;

export const NavigationMenuIndicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SelectionInput = styled.select`
  border: none;
  background-color: ${(props) => props.theme['gray-300']};
  padding: .5rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  justify-content: space-between;
  color: ${(props) => props.theme['violet-500']};
  font-weight: regular;
  background: transparent;
  border: 0;
  width: 100%;
  cursor: pointer;
  position: relative;
`


