import { SearchForm } from '../SearchForm'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>NEWS NOW</h1>

        <SearchForm />
        {/* <img src={logoImg} alt="" /> */}
      </HeaderContent>
    </HeaderContainer>
  )
}
