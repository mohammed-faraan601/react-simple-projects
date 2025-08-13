import { Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./components/GamePage";
import StartGame from "./components/StartGame";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<StartGame />}/>
        <Route path="/gamePage" element={<GamePage />}/>
      </Routes>
    </div>
  );
}

export default App;
