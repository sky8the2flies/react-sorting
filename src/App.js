import React, { useState } from 'react';
import './App.css';
import SortItem from './components/SortItem';

let history = [];
let timer = null;
let step = 0;

function App() {
  const [arr, setArr] = useState(resetArray())

  function resetArray() {
    history = [];
    step = 0;
    return (
      new Array(10).fill().map(() => (
        {
          num: Math.floor(Math.random() * 100),
          eval: false,
          sorted: false,
        }
      ))
    )
  }
  
  function bubbleSort(sortArr) {
    history = [[...sortArr]]
    step = 0;
    const len = sortArr.length;
    for (let i = len-1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (sortArr[j-1].num > sortArr[j].num) {
          const temp = sortArr[j-1];
          console.log(temp)
          sortArr[j] = temp;
        }
        sortArr[j].eval = true;
        sortArr[j-1].eval = true;
        history.push(sortArr)
      }
    }
    console.log(history)
    // setInterval(() => this.runTimer(), 5000)
  }

  // function runTimer() {
  //   this.setState({arr: history[step]})
  //   step+=1;
  //   if (step >= history.length-1) {
  //     clearInterval(timer);
  //   }
  // }

  return (
      <div className="arr-container">
        {arr.map((item, idx) =>
          <SortItem
            key={idx}
            item={item}
          />
        )}
        <button onClick={() => bubbleSort(arr.slice())}>Bubble</button>
      </div>
  );
}

export default App;