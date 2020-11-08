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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Tus pajaritos vienen volando....</div>;
  } else {
    return (
      <div className="ultra-container">
        <div className="title">
          <spam className="text-title">
            Pajaros de Chile por Fabián Skármeta
          </spam>
          <p>
            API proveída por{" "}
            <a href="https://ninjas.cl">Ninjas.cl (Camilo Castro)</a>
          </p>
        </div>
        <div className="container">
          <BirdBox birds={birds} />
        </div>
      </div>
    );
  }
}

export default App2;
