import React from 'react'

export const Search = () => {
    const hideSearch = () =>{
        document.querySelector('#search-form').classList.remove('active');
      }
  return (
    <form action="" id="search-form">
    <input type="search" placeholder="search here..." name="" id="search-box"/>
    <label for="search-box" className="fas fa-search"></label>
    <i className="fas fa-times" id="close" onClick={hideSearch}></i>
</form>
  )
}

export default Search;
