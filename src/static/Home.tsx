import Woof from "./Woof";
import RedirectButton from "./RedirectButton";

function Home() {
  return (
    <div>
      <Woof />
      <h1 className="title">Welcome, dog lover.</h1>
      <h3>To display the list of dog breeds, click the dog icon below.</h3>
      <h3>
        To search for a specific dog breed, click the magnifying glass icon.
      </h3>
      <h3>To go back to the homepage at any time, click on "Woof".</h3>
      <nav className="navbar">
        <RedirectButton active={false} url="/all" img="./doggy.svg" />
        <RedirectButton active={false} url="/search" img="./search.svg" />
      </nav>
    </div>
  );
}

export default Home;
