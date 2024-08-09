import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { PaginationContainer } from './styles';
import { fetchNews, nextPage, previousPage } from '../../store/news-slice';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export function Pagination() {
  const { formData, data } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch()

  function handleNextPage() {
    dispatch(nextPage())

    const newFormData = { ...formData, page: formData.page + 1 };
    dispatch(fetchNews(newFormData))
  }

  function handlePreviousPage() {
    dispatch(previousPage())

    const newFormData = { ...formData, page: formData.page - 1 };
    dispatch(fetchNews(newFormData))
  }

  return (
    <PaginationContainer>
      <button
        onClick={handlePreviousPage}
        disabled={formData.page === 1 || data.length === 0}
      >
        <ArrowLeft size={24} />
      </button>
      <span>{formData.page}</span>
      <button
        onClick={handleNextPage}
        disabled={formData.page === 10 || data.length === 0}
      >
        <ArrowRight size={24} />
      </button>
    </PaginationContainer>
  );
}