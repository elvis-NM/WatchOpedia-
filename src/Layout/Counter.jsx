import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    //use state repalces complete state object -setstate replaces only object passed
    return { counter: 10 };
  });

  const [titleState, setTitleState] = useState("Fun"); // multiple use state

  function incrementCounter() {
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter + 1 }; //spread  previous state to fix
    });
  }

  function decrementCounter() {
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter - 1 };
    });
  }

  return (
    <div className="container col-12 col-md-2 offset-md-s border row text-white">
      <span className="h2 pt-4 m-2 text-white-50">{titleState} Counter</span>
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
