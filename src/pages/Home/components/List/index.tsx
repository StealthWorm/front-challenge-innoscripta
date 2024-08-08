import { useSelector } from 'react-redux'
import { NewsCard } from '../NewsCard'
import { EmptyListItem, NewsList } from './styles'
import { RootState } from '../../../../store';
import { News } from '../../../../store/news-slice';
import { Suspense } from 'react';

export function List() {
  const news = useSelector((state: RootState) => state.news.data)
  const status = useSelector((state: RootState) => state.news.status);

  console.log(news)

  return (
    <NewsList>
      <Suspense fallback={<p>Loading...</p>}>
        {news.length === 0 ?
          <EmptyListItem>No news available, try another search</EmptyListItem>
          : (
            news.map((newsItem: News) => (
              <NewsCard
                key={newsItem.id} {...newsItem}
              />
            ))

          )
        }
      </Suspense>
    </NewsList>
  )
}
