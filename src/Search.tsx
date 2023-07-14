import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Woof from "./static/Woof";
import Dog from "./Dog";
import RedirectButton from "./static/RedirectButton";

function Search() {
  //parametr query służący głównie do przekierowania po kliknięciu na rasę pieska
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(query);
  const [searchResult, setSearchResult] = useState<string[]>([]);

  //Zczytywanie danych z API
  const handleSearch = () => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((response) => response.json())
      .then((data) => {
        const dogBreeds = Object.keys(data.message);
        const filteredBreeds = dogBreeds.filter((breed) =>
          breed.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(filteredBreeds);
      })
      .catch((error) => {
        console.error("Error searching for dogs:", error);
        setSearchResult([]);
      });
  };

  //update parametru query jeśli ulegnie zmianie
  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  /*
  Do natychmiastowego wyszukiwania piesków.
  Wcześniej było to dokonywane po kliknięciu w przycisk "search".
  Wiązało się to jednak z wolniejszym procesem wyszukiwania.
  */
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  /*
  Funkcja odyfikująca parametr query.
  Dokładnie taka sama funkcja istnieje na stronie /all (All.txs).
  Wynika to z konieczności przekierowania po kliknięciu w pieska.
  */
  const handleBreedClick = (breed: string) => {
    window.location.href = `/search?query=${encodeURIComponent(breed)}`;
  };

  /* Jeśli istnieje dokładnie jeden unikatowy wynik, jest on od razu wyświetlany.
  W przypadku większej ilości pasujących wyników, jest wyświetlana lista.
  Można kliknąć w któryś z wyników albo uściślić wyszukiwanie.
  */
  const renderSearchResult = () => {
    switch (searchResult.length) {
      case 0:
        return <p style={{ textAlign: "center" }}>No results found.</p>;

      case 1:
        return (
          <div>
            {searchResult.map((subBreed) => (
              <div key={subBreed}>
                <Dog breed={subBreed} />
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="dog-list">
            {searchResult.map((subBreed, index) => (
              <div
                onClick={() => handleBreedClick(subBreed)}
                className="dog-breed"
                key={index}
              >
                {subBreed}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div>
      <Woof />

      <div className="searchbar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a dog breed"
        />
      </div>

      <div className="search-result">{renderSearchResult()}</div>

      <nav className="navbar">
        <RedirectButton active={false} url="/all" img="./doggy.svg" />
        <RedirectButton active={true} url="/search" img="./search.svg" />
      </nav>
    </div>
  );
}

export default Search;
