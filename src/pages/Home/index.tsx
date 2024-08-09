import { Filters } from './components/Filters'
import { List } from './components/List'
import { Pagination } from '../../components/Pagination'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Filters />
      <Pagination />
      <List />
    </HomeContainer>
  )
}
