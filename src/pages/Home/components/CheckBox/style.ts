import * as Checkbox from '@radix-ui/react-checkbox'
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background-color:  ${(props) => props.theme['gray-300']} ;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;

  &:hover { 
    background-color: ${(props) => props.theme['gray-500']};
  };

  border: 2px solid ${(props) => props.theme['gray-500']};

  &[data-state="checked"] {
    background-color: ${(props) => props.theme['purple-500']};
  };

  &:focus, &[data-state="checked"] {
    border: 2px solid ${(props) => props.theme['purple-500']};
  };
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme['gray-100']};
  width: 12px;
  height: 12px;

  &[data-state="checked"] {
    animation: ${slideIn} 200ms ease-out;
  };

  &[data-state="unchecked"] {
    animation: ${slideOut} 200ms ease-out;
  };
`;