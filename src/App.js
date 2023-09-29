import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Star Wars Universe</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
