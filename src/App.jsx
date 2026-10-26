
import React from "react";
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./App.css";

function Home() {
  return <h3>Welcome to Home Page</h3>;
}

function About() {
  return <h3>Welcome to About Page</h3>;
}

function Pages() {
  const location = useLocation();

  return (
    <div className="router-box">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <p>Current Path: {location.pathname}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>React Router Types</h1>

      <section>
        <h2>1. HashRouter</h2>
        <p>URL uses the # symbol.</p>
        <HashRouter>
          <Pages />
        </HashRouter>
      </section>

      <section>
        <h2>2. MemoryRouter</h2>
        <p>Navigation is stored in memory.</p>
        <MemoryRouter initialEntries={["/"]}>
          <Pages />
        </MemoryRouter>
      </section>

      <section>
        <h2>3. StaticRouter</h2>
        <p>Used for server-side rendering.</p>
        <p>Example location: /about</p>
        <p>See the separate server-side example.</p>
      </section>
    </div>
  );
}
