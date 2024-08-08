import styled from 'styled-components'

export const NewsList = styled.ul`
  display: grid;
  gap: 2.5rem;
  width: 100%;
  padding: 0 5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    display: grid;
    gap: .5rem;
    width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
  }
`;

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