import React, { useState } from 'react';

function Task() {
  const [value, setValue] = useState(0);
  const [inc, setInc] = useState('');
  const [dec, setDec] = useState('');

  function increase() {
    const num = inc === '' ? 0 : Number(inc);
    setValue(value + num);
    setInc('');
  }

  function decrease() {
    const num = dec === '' ? 0 : Number(dec);
    setValue(value - num);
    setDec('');
  }

  return (
    <div>
      <h2>Task</h2>

      <input
        type="number"
        placeholder="Enter value to increase"
        onChange={(e) => setInc(e.target.value)}
        value={inc}
      />
      <button onClick={increase}>Increase</button>

      <br /><br />

      <input
        type="number"
        placeholder="Enter value to decrease"
        onChange={(e) => setDec(e.target.value)}
        value={dec}
      />
      <button onClick={decrease}>Decrease</button>

      <h1>Current Value: {value}</h1>
    </div>
  );
}

export default Task;
