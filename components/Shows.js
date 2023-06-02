import React, { useEffect, useState } from "react";
import { ShowsList } from "./ShowsList";


const SHOWS_ENDPOINT = "https://api.tvmaze.com/search/shows?q=all";

export const Shows = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getShowData() {
      const response = await fetch(SHOWS_ENDPOINT);
      const jsonData = await response.json();
      setShows(jsonData)
      setIsLoading(false)
      console.log(jsonData);
    }

    getShowData();
  }, []);

return (
    <div className="container">
        <div>
            <h1 className="title">Movies</h1>
        </div>
        <div className="movie-container">
          {!isLoading ? (
            shows.map((data) => {
              return <ShowsList key={data.show.id} data={data.show} />;
            })
          ) : (
            <div>Loading</div>
          )}
        </div>
    </div>
  );
};
