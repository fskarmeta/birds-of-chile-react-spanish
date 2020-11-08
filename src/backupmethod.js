import { useState, useEffect } from "react";
import "./App.css";
import BirdBox from "./components/birdbox";

function App() {
  const [birds, setBirds] = useState([
    {
      name: { spanish: "Tique", latin: "Milvago chimango" },
      images: { main: "https://www.avesdechile.cl/0jpgn/253jt5.jpg" },
    },
  ]);

  useEffect(() => {
    getPostAsync();
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  const getPostAsync = async () => {
    try {
      const response = await fetch("https://aves.ninjas.cl/api/birds", {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      if (!response.ok) {
        const msg = "There has been an error";
        throw new Error(msg);
      }
      const data = await response.json();

      setBirds(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ultra-container">
      <div className="title">
        <h2>Bird most often seen in Santiago, Chile</h2>
      </div>
      <div className="container">
        <BirdBox birds={birds} />
      </div>
    </div>
  );
}

export default App;
