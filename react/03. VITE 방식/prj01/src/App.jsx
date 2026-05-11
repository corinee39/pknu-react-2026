import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => Math.min(prev + 1, 20));
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="App">
      <h1>Count</h1>
      <p className="value">현재값: {count}</p>
      <button onClick={handleIncrement}>증가 버튼</button>
      <button onClick={handleDecrement}>감소 버튼</button>
    </div>
  );
}

export default App;
