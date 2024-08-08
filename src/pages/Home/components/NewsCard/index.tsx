import { News } from "../../../../store/news-slice";
import { getFormattedDate } from "../../../../utils/date-formatter";
import { NewsHeader, NewsItem } from "./styles";

export function NewsCard({ description, title, publishedAt, url, urlToImage, author }: News) {
  return (
    <NewsItem>
      <a href={url} target="_blank">
        <NewsHeader>
          <h3>{title}</h3>
          <span>{getFormattedDate(publishedAt)}</span>
        </NewsHeader>
        <img src={urlToImage} alt={title} />

        <footer>
          <p>{description}</p>
          <span>{author}</span>
        </footer>
      </a>
    </NewsItem>
  )
}