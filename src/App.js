import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import PixabayImages from "./components/PixabayImages";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    //const key = process.env.API_KEY;
    axios
      .get(
        `https://pixabay.com/api/?key=27502177-68818dbb220af984603de0960&image_type=photo`
      )
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div className="App">
      <Header />
      <Loader />
      <PixabayImages />
    </div>
  );
}

export default App;
