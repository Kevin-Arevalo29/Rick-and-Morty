import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RickAndMortyCharacterCard from "./Pages/RickAndMortyCharacter/RickAndMortyCharacterCard";
import HomePage from "./Pages/home/HomePage";
import NotFontPage from "./Pages/NotFont/NotFontPage";
// import Nav from "./components/navComponent/Nav";

function App() {
  return (
    <div>
      <Router>
        {/* <Nav/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Personajes" element={<RickAndMortyCharacterCard />} /> 
          <Route path="/*" element={<NotFontPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;