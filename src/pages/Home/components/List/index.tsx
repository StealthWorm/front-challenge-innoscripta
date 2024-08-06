import { NewsCard } from '../NewsCard'
import { NewsList } from './styles'

export function List() {
  return (
    <NewsList>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </NewsList>
  )
}