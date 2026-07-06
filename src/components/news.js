import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./newsItem";
import Spinner from "./spinner";
import { useState, useEffect } from "react";
function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [,setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const capitalize = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };
  const { category, pageSize, apiKey, setProgress } = props;
  useEffect(() => {
    document.title = `${capitalize(category)} - NewsSphere`;
    const componentDidMount = async () => {
      setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=1&pageSize=${pageSize}&category=${category}&apiKey=${apiKey}`;
      setLoading(true);
      let data = await fetch(url);
      setProgress(30);
      let parsedData = await data.json();
      setProgress(50);
      setArticles(parsedData?.articles || []);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setProgress(100);
    };
    componentDidMount();
  }, [category, pageSize, apiKey, setProgress]);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page+1}&pageSize=${pageSize}&category=${category}&apiKey=${apiKey}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    if (!parsedData.articles || parsedData.articles.length === 0) {
      setHasMore(false);
      setLoading(false);
      return;
    }
    setArticles((prev) => prev.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: 70 }}>
        NewsSphere - Top {capitalize(category)} Headlines{" "}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={articles.length > 0 && <Spinner />}
      >
        {loading && articles.length === 0 && <Spinner />}
        <div className="container my-2">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://unsplash.com/photos/pink-petaled-flower-YdAqiUkUoWA"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    publishDate={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
export default News;
