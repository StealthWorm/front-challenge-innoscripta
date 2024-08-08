import styled from "styled-components"

export const NewsItem = styled.li`
  display: flex;
  max-width: 25rem;
  max-height: 40rem;
  flex-direction: column;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-600']};

  a { 
    text-decoration: none;

    &:visited{ 
      color: ${(props) => props.theme['gray-500']}; 
    }
  }

  img {
    width: 100%;
    margin: 1rem 0;
    aspect-ratio: 4/4;
    border-radius: 8px;
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

  &:hover {
    transition: all .5s;
    background-color: ${(props) => props.theme['gray-300']};
    transform: scale(1.01);
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      display: flex;
      font-size: 12px;
      font-weight: bold;
      justify-content: flex-end;
      color: ${(props) => props.theme['violet-500']};
    }
  }

  @media only screen and (max-width: 600px) { 
    max-width: 100%;

    img {
      width: 5rem;
      height: 5rem;
      margin: 1rem 0;
      aspect-ratio: 1/1;
    }
  }
`

export const NewsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: end;

  h3 {
    width: 100%;
    font-size: 1.5rem;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => props.theme['violet-500']}; 
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
  }

  span {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 10px; 
    color: ${(props) => props.theme['gray-600']};
    font-weight: bold;
  }
`