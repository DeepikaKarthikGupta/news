import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import SearchComponent from "../common/SearchComponent";
import { useSelector } from "react-redux";

const Menu = () => {
  const isSearchHidden = useSelector((state) => state.isSearchHidden);

  const handleClick = () => {
    window.location.href = "/Home";
  }
  return (
    <>
      <div className="menu">
        <i className="fa fa-home" aria-hidden="true" onClick={(e) => { handleClick(e) }}></i>
        {isSearchHidden ? null : <SearchComponent />}
      </div>
    </>
  )
}

export default Menu;