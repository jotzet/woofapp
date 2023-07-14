import { useEffect, useState } from "react";
import Woof from "./static/Woof";
import RedirectButton from "./static/RedirectButton";

function All() {
  //zczytywanie danych z API
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        setDogs(Object.keys(data.message));
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  }, []);

  //funkcja przekierowująca do strony z wyszukiwarką w celu wyświetlenia pieska
  const handleBreedClick = (breed: string) => {
    window.location.href = `/search?query=${encodeURIComponent(breed)}`;
  };

  return (
    <div>
      <Woof />
      <h1 className="title">Dog breeds</h1>
      <div className="dog-list">
        {dogs.map((breed) => (
          <div key={breed}>
            <div onClick={() => handleBreedClick(breed)} className="dog-breed">
              {breed}
            </div>
          </div>
        ))}
      </div>
      <nav className="navbar">
        <RedirectButton active={true} url="/all" img="./doggy.svg" />
        <RedirectButton active={false} url="/search" img="./search.svg" />
      </nav>
    </div>
  );
}

export default All;
