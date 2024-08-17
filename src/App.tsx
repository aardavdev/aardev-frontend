import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Header from "./components/base/Header";
import "./app.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Main>
      </Router>
    </>
  );
}

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
`;

export default App;
