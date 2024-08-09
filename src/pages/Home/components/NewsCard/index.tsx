import { News } from "../../../../store/news-slice";
import { getFormattedDate } from "../../../../utils/date-formatter";
import { NewsFooter, NewsHeader, NewsItem } from "./styles";

export function NewsCard({ description, title, publishedAt, url, urlToImage, author }: News) {
  return (
    <NewsItem>
      <a href={url} target="_blank">
        <NewsHeader>
          <h3>{title}</h3>
          <span>{getFormattedDate(publishedAt)}</span>
        </NewsHeader>
        <img src={urlToImage} alt={title} />

        <NewsFooter>
          <p>{description}</p>
          <span>{author}</span>
        </NewsFooter>
      </a>
    </NewsItem>
  )
}