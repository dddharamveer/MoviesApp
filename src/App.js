import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { Header } from "./components/Header";
import { Booking } from "./pages/Booking";
function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={data} />} />
        <Route
          path="/details/:movieName"
          element={<MovieDetails movies={data} />}
        />
        <Route path="/bookings" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
