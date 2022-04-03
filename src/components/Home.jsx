import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import fetchAllHeadlines from "../api/fetchAllHealines"
import getSearchedData from "../api/getSearchedData"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const dispatch = useDispatch();
  const { articles, searchedWords, isSearchEnabled, currentWord, loading } = useSelector((state) => state);
  const searchedWord = [...new Set(searchedWords)];
    
  useEffect(() => {    
    const fetchData = async () => {
      await dispatch(fetchAllHeadlines());
    }
    fetchData();
  }, [dispatch])

  const onSearchClick = async (item) => {
    item ? await dispatch(getSearchedData(item)) : await dispatch(fetchAllHeadlines());
    dispatch({ type: "SEARCHED_KEYS", words: item });
    dispatch({ type: "IS_SEARCH_ENABLED", isSearchEnabled: item ? true : false });
    dispatch({ type: "SEARCHED_WORD", words: item });
  }

  return (
    <div>
      {isSearchEnabled ?
        <>
          <div className="row prevSearch">
            <div className="col-md-2"> Previous Searches :</div>
            <div className="col-md-10" style={{ display: "inline-flex" }}>
              {
                searchedWord.map(item => {
                  return (
                    <div key={item.id} className="searchedItems" onClick={() => onSearchClick(item)}>
                      {item}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="row currentSearch">
            <div className="col-md-3"> Currently showing results for :</div>
            <div className="col-md-9 currentWord" style={{ display: "inline-flex", marginLeft : "-65px" }}>
              {currentWord}
            </div>
          </div>
        </> :
        <div className="headline">
          Top Headlines For Today
    </div>}
      {loading ?
        <div className="d-flex justify-content-center" style={{ marginTop: "10%" }}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        :
        <div className="container" style={{ marginTop: "2rem" }}>

          <div className="row">
            {articles &&
              Object.keys(articles).map((item, index) => {
                return (
                  <>
                    <div
                      key={"latest" + index}
                      className="col-md-3 col-sm-6 item containerCard"
                    ><Link to={{
                      pathname: `/news/${index}`,
                      state: { news: articles[item] }
                    }}>
                        <div className="card item-card card-block" key={"card" + index}>

                          <img src={articles[item].urlToImage} alt="bbc" key={"img" + index}/>
                          <h5 className="item-card-title mt-3 mb-3 newsTitle" key={"h5" + index}>
                            {articles[item].title}
                          </h5>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
