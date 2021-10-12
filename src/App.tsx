import React from 'react';
import ReactDOM from 'react';
import { Header } from './components';
import MovieCard from './modules/home/movieCard';
import { useSelector, useDispatch } from 'react-redux';
import { counterSelector } from './redux/movie/selectors';
import {doIncrementCounter, doDecrementCounter} from './redux/movie/actions'

function App() {
  const counter = useSelector(counterSelector);
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <MovieCard />
      counter: {counter}
      <button onClick={() => dispatch(doIncrementCounter())}>+</button>
      <button onClick={() => dispatch(doDecrementCounter())}>-</button>
    </div>
  )
}

export default App;