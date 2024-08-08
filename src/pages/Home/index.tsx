import { Filters } from './components/Filters'
import { List } from './components/List'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Filters />
      <List />
    </HomeContainer>
  )
}
