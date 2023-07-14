import Woof from "./Woof";
import RedirectButton from "./RedirectButton";

function Home() {
  return (
    <div>
      <Woof />
      <h1 className="title">Welcome, dog lover.</h1>
      <nav className="navbar">
        <RedirectButton active={false} url="/all" img="./doggy.svg" />
        <RedirectButton active={false} url="/search" img="./search.svg" />
      </nav>
    </div>
  );
}

export default Home;
