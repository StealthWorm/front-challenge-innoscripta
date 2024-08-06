import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 0 1.5rem 5rem;
`

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 2rem;
`

export const NewsItem = styled.li`
  display: flex;
  max-width: 20rem;
  max-height: 40rem;
  flex-direction: column;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-600']};

  img {
    width: 100%;
    margin: 1rem 0;
  }

  h2 ~ span {
    font-size: 12px; 
    color: ${(props) => props.theme['gray-500']};
    font-weight: bold;
  }

  p {
    display: -webkit-box;
    color: ${(props) => props.theme['gray-500']};
    height: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`