import { Filters } from './components/Filters'
import { HomeContainer, NewsHeader, NewsItem, NewsList } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Filters />

      <NewsList>
        <NewsItem>
          <div>
            <NewsHeader>
              <h2>Title</h2>
              <span>10/10/2024</span>
            </NewsHeader>
            <img src={`https://picsum.photos/200`} alt="img" />

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.sdasd</p>
          </div>
        </NewsItem>
        <NewsItem>
          <div>
            <NewsHeader>
              <h2>Title</h2>
              <span>10/10/2024</span>
            </NewsHeader>
            <img src={`https://picsum.photos/200`} alt="img" />

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.sdasd</p>
          </div>
        </NewsItem>
        <NewsItem>
          <div>
            <NewsHeader>
              <h2>Title</h2>
              <span>10/10/2024</span>
            </NewsHeader>
            <img src={`https://picsum.photos/200`} alt="img" />

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.sdasd</p>
          </div>
        </NewsItem>
        <NewsItem>
          <div>
            <NewsHeader>
              <h2>Title</h2>
              <span>10/10/2024</span>
            </NewsHeader>
            <img src={`https://picsum.photos/200`} alt="img" />

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.sdasd</p>
          </div>
        </NewsItem>
        <NewsItem>
          <div>
            <NewsHeader>
              <h2>Title</h2>
              <span>10/10/2024</span>
            </NewsHeader>
            <img src={`https://picsum.photos/200`} alt="img" />

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.sdasd</p>
          </div>
        </NewsItem>
      </NewsList>
    </HomeContainer>
  )
}
