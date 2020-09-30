import React, { useState } from 'react'

let history = [];

function App() {
  const [arr, setArr] = useState(resetArr())

  function resetArr() {
    return new Array(10).fill().map(() => {
      return ({
      num: Math.floor(Math.random() * 100),
      eval: false
    })})
  }

  function bubbleSort() {
    const history = [];
    const sArr = arr.slice();
    let len = sArr.length;
    for (let i = len-1; i >= 0; i--) {
      for (let j = 1; j<=i; j++) {
        if (sArr[j-1].num > sArr[j].num) {
          const temp = sArr[j-1].num;
          sArr[j-1].num = sArr[j].num;
          sArr[j].num = temp;
        }
        history.push(sArr);
      }
    }
    console.log(history)
  }

  return (
    <div>
      <div className="arr-container">
        {arr.map((item, idx) => 
          <div key={idx} className="arr-item">
            {item.num}
          </div>
        )}
      </div>
      <div>
        <button onClick={() => bubbleSort()}>Bubble</button>
      </div>
    </div>
  )
}

export default App;