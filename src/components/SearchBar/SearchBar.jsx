import React from 'react'
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import "./searchbar.css"

const SearchBar = () => {
  return (
    <div className="search-bar">

      <div className="search-input">
        <FaSearch />
        <input
          type="text"
          placeholder="Job title, keywords, or company"
        />
      </div>

      <div className="search-input">
        <FaMapMarkerAlt />
        <input
          type="text"
          placeholder="Location"
        />
      </div>

      <button className="search-btn">
        Search Jobs
      </button>

    </div>
  )
}

export default SearchBar
