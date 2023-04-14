import React, { useEffect, useState } from "react";
import VideoList from "./VideoList";
import { searchVideo } from "../modules/videoManager";

const Search = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchButtonClick = (e) => {
    e.preventDefault()

    searchVideo(searchTerms)
        .then((searchArr) => {
            setSearchResults(searchArr)
        })
}

  return (
    <div className="container">
      <div className="row justify-content-center">
      <h3>Search Videos</h3>
                <div>
                    <label htmlFor="videoSearchBox">Search by any term:</label><br></br>
                    <input 
                        onChange={
                            (changeEvent) => {
                                setSearchTerms(changeEvent.target.value)
                            }
                        }
                        type="text" placeholder="Search All Videos" id="videoSearchBox" />
                </div>
                <div>
                    <button
                        onClick={(clickEvent) => handleSearchButtonClick(clickEvent)}
                        id="userReviewsSearchButton">
                        Search
                    </button>
                </div>
                <br/>
                <VideoList searchResults={searchResults}/>
      </div>
    </div>
  );
};

export default Search;