import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { EmptyListItem } from "./styles";
import { NewsCard } from "../NewsCard";
import { News } from "../../../../store/news-slice";

export function NewsListContent() {
  const news = useSelector((state: RootState) => state.news.data);

  return (
    <>
      {news.length === 0 ? (
        <EmptyListItem>No news available, try another search</EmptyListItem>
      ) : (
        news.map((newsItem: News) => (
          <NewsCard key={newsItem.id} {...newsItem} />
        ))
      )}
    </>
  );
}