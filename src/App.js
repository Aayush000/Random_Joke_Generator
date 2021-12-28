import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Aayush");
  const [lastName, setLastName] = useState("Bhatta");

  // const [joke, setJoke] = useState("");
  const joke = useRandomJoke(firstName, lastName);
  // Custom Hook
  // const joke = useRandomJoke("Aayush", "Bhatta");

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>

        <h4>{joke}</h4>

        <form>
          <input
            placeholder="First Name"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            ref={firstNameRef}
          />
          <input
            placeholder="Last Name"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            ref={lastNameRef}
          />
          <button onClick={generateJoke}>Generate Jokes</button>
        </form>
      </center>
    </div>
  );
}

export default App;
