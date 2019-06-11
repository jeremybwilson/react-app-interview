import React, { useState } from "react";

function App() {
  const [currentTimes, setCurrentTimes] = useState([]);
  const handleAdd = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const now = `${hours}:${minutes}:${seconds}`;
    // copy our array
    const newCurrentTimes = [...currentTimes];
    newCurrentTimes.push(now);
    // push our time to our array
    setCurrentTimes(newCurrentTimes);
    console.log(newCurrentTimes);
  };
  // create a handler function to remove the selected time
  const handleDelete = (index) => {
    // remove the selected time
    // delete the index from currentTimess
    const newCurrentTimes = [...currentTimes];
    newCurrentTimes.splice(index, 1);
    setCurrentTimes(newCurrentTimes);
  }

  return (
    <div>
      <button onClick={handleAdd}>+</button>
        <ul>
          {currentTimes.map((currentTime, index) => (
            <li key={index}>
              {currentTime}
              <button onClick={() => handleDelete(index)}>-</button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;

// As a user, I want to click a button to show the current time
// render a button to the screen
// create a handler function to add the time
// create the time
// add to our storage container


// As a user, I want to click the button more than once, and
// display each current time on click in a list

// unordered list
  //

// As a user, I want to be able to delete individual times
