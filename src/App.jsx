import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home> </Home>
    </div>
  );
}

export default App;
