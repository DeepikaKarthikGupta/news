import React, { useEffect } from "react";
import { useDispatch } from "react-redux"

const News = (props) => {

  const { location } = props;
  const { news } = location.state;
  const dispatch = useDispatch();
  const publishedDate = new Date().toDateString(news.publishedAt);

  useEffect(() => {
    dispatch({ type: "HIDE_SEARCH", isSearchHidden: true });
  })

  return (
    <>
      <div className="container newsContainer">
        <h1 className="newsHeading">{news.title}</h1>
        <div className="row">
          <div className="col-md-2">
            <span style={{ float: "left" }} className="authorDate">Author : {news.author}</span>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-4">
            <span style={{ float: "right" }} className="authorDate">Reuters / Updated: {publishedDate} IST</span>
          </div>
        </div>
        <div className="row imageStyle">
          <div className="col-md-2 col-sm-12"></div>
          <div className="col-md-8 col-sm-12">
            <img src={news.urlToImage} style={{ height: "25rem" }} alt="BBC"/>
          </div>
          <div className="col-md-2 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-10 col-sm-12">
            <p style={{ textAlign: "center", fontSize: "1rem" }}>{news.content}</p>
          </div>
          <div className="col-md-1 col-sm-12"></div>
        </div>
      </div>
    </>
  );
};

export default News;
