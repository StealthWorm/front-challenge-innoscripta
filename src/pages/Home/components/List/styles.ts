import styled from 'styled-components'

export const NewsList = styled.ul`
  display: grid;
  gap: 2.5rem;
  width: 100%;
  padding: .5rem 5rem;
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: .5rem 2rem;
  };

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: .5rem 2rem;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  };
`;

export const Loading = styled.h3`
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-500']};
`
