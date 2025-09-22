import { useState } from 'react';
import './App.css';
import CountResult from './CountResult';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev === 0 ? 0 : prev - 1));

  return (
    <>
      <h1>⏰ 카운트 앱 생성하기 </h1>
      <h2>count: {count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <CountResult count={count} />
    </>
  );
}

export default App;
