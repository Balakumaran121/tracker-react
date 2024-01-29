import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <nav className="nav">
        <h1 className="welcomeflex ">Welcome</h1>
        <ul className="navleft">
          <li className="inline"><a href="Login">Login |</a></li>
          <li className="inline"><a href="Register">Register |</a></li>
          <li className="inline"><a href="Table">Todo-Table</a></li>
        </ul>
      </nav>
      <div className="centerword">
          <h2 className="h2word">Welcome to the page </h2>
      </div>
    </div>
  );
};

export default Home;
