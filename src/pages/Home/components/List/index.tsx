import { useSelector } from 'react-redux'
import { RootState } from '../../../../store';
import { NewsListContent } from '../ListContent';
import { Loading, NewsList } from './styles';

export function List() {
  const status = useSelector((state: RootState) => state.news.status);

  return (
    <NewsList>
      {status === 'loading'
        ? (<Loading>Loading...</Loading>)
        : (<NewsListContent />)
      }
    </NewsList>
  );
}
