import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import ChapterCard from "./ChapterCard";

function Chapters() {
  const [chapters, setChapters] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("/geeta/chapters"
    );

    setChapters(response.data);
  };

  return (
    <div className="Chapters">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="chapterss">
        {chapters &&
          chapters.map((chapter, index) => {

            return (
              <div className="book" key={index}>
                <ChapterCard chapter={chapter} key={index} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Chapters;
