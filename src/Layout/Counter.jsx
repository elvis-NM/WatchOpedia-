import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    return { counter: 10 };
  });

  function incrementCounter() {
    setCounterState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }

  function decrementCounter() {
    setCounterState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  }

  return (
    <div className="col-12 col-md-2 offset-md-s border row text-white">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
      <button className="btn btn-success m-1" onClick={incrementCounter}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={decrementCounter}>
        -1
      </button>
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};

export default Counter;
