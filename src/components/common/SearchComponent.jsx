import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import getSearchedData from "../../../src/api/getSearchedData";
import fetchAllHeadlines from "../../../src/api/fetchAllHealines";

const SearchComponent = () => {
  const [searchItem, setSearchItem] = useState('')
  const dispatch = useDispatch();
  
  //Validation for empty searchBox
  const onSearchClick = async () => {    
    if (searchItem === ''){
      alert("Enter item to search");
      return;
    }
    searchItem ? await dispatch(getSearchedData(searchItem)) : await dispatch(fetchAllHeadlines());
    dispatch({ type: "SEARCHED_WORD", currentWord: searchItem });
    dispatch({ type: "SEARCHED_KEYS", words: searchItem });
    dispatch({ type: "IS_SEARCH_ENABLED", isSearchEnabled: searchItem ? true : false });
  }

  const onClear = async () => {
    setSearchItem('');
    await dispatch(fetchAllHeadlines());
    dispatch({ type: "IS_SEARCH_ENABLED", isSearchEnabled: false });
  }

  const hanldeEnter = (e) => {    
    if (e.key === "Enter") {
      searchClick();      
    }
  }

  //Debouncing to stop unwanted clicks execution on Click Button
  const debounce = (fn, delay) => {
    let timeoutID;
    return function(...args){
     if(timeoutID){
      clearTimeout(timeoutID); 
     } 
     timeoutID = setTimeout(() => {
       fn.apply(...args);
     }, delay)
    }
  }

  const searchClick = debounce(onSearchClick, 1000); 

  return (
    <>
      <div className="input-wrapper">
        <input type="text" className="input" onKeyDown={(event) => hanldeEnter(event)} onChange={(event) => { setSearchItem(event.target.value); }} value={searchItem} />
        {searchItem ? <span className="fa fa-times errspan" onClick={() => onClear()}></span> : null}
      </div>
      <i className="fa fa-search" aria-hidden="true" onClick={() => searchClick()} ></i>
    </>
  )
}

export default SearchComponent;