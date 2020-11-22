import { useState, useEffect } from "react";
import "./App.css";
import BirdBox from "./components/birdbox";

function App2() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [birds, setBirds] = useState([
    {
      name: { spanish: "Tique", latin: "Milvago chimango" },
      images: { main: "https://www.avesdechile.cl/0jpgn/253jt5.jpg" },
    },
  ]);

  const [current, setCurrent] = useState("");

  useEffect(() => {
    fetch("https://aves.ninjas.cl/api/birds")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBirds(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function filter(e) {
    let currentText = e.target.value;
    setCurrent(capitalize(currentText));
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="ultra-container">
        <div className="title">
          <spam className="text-title">
            Pájaros de Chile por{" "}
            <a
              href="https://github.com/fskarmeta"
              target="_blank"
              rel="noreferrer"
            >
              Fabian Skármeta
            </a>
          </spam>
          <p class="subtitle">
            API proveída por{" "}
            <a href="https://ninjas.cl" target="_blank" rel="noreferrer">
              Ninjas.cl (Camilo Castro)
            </a>
          </p>
        </div>
        <div className="container">
          <p>Tus pajaritos vienen volando.....</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ultra-container">
        <div className="title">
          <spam className="text-title">
            Pájaros de Chile por{" "}
            <a
              href="https://github.com/fskarmeta"
              target="_blank"
              rel="noreferrer"
            >
              Fabian Skármeta
            </a>
          </spam>
          <p class="subtitle">
            API proveída por{" "}
            <a href="https://ninjas.cl" target="_blank" rel="noreferrer">
              Ninjas.cl (Camilo Castro)
            </a>
          </p>
          <form action="" class="birds-form">
            <label htmlFor="fname">Filter: </label>
            <input
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => filter(e)}
            />
          </form>
        </div>
        <div className="container">
          <BirdBox birds={birds} current={current} />
        </div>
      </div>
    );
  }
}

export default App2;
