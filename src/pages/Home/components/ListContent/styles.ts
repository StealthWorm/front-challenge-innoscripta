import styled from "styled-components";

export const EmptyListItem = styled.h1`
  position: absolute;
  left: 0;
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${(props) => props.theme['gray-300']};
  width: 100%;
`