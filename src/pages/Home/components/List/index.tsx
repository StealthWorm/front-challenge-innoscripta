import { useSelector } from 'react-redux'
import { RootState } from '../../../../store';
import { Suspense } from 'react';
import { NewsListContent } from '../ListContent';
import { Loading, NewsList } from './styles';

export function List() {
  const status = useSelector((state: RootState) => state.news.status);

  return (
    <NewsList>
      <Suspense fallback={<p>Loading...</p>}>
        {status === 'loading' ? (
          <Loading>Loading...</Loading>
        ) : (
          <NewsListContent />
        )}
      </Suspense>
    </NewsList>
  );
}
