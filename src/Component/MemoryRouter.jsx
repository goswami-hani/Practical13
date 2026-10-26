import React from "react";
import {
  MemoryRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <MemoryRouter>
      <h1>MemoryRouter Example</h1>

      <Link to="/">Home</Link> {" | "}
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
}