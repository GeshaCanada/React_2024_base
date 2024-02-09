import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: " ",
    hasError: false,
    problem: "Bug",
  });

  // const [name, setName] = useState("");
  // const [problem, setProblem] = useState("Bug");
  // const [hasError, setHasError] = useState(true);

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      // ...prev (problem include and in future doesn't metter how many will be field of states)
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  // function toggleError() {
  //   // setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Feedback</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="problem">Describe your problem</label>
        <select
          id="problem"
          className="control"
          value={form.problem}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, problem: event.target.value }))
          }
        >
          <option value="bug">Bug</option>
          <option value="need support">Need support</option>
          <option value="solution">Solution</option>
        </select>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
      </form>
      <StateVsRef />
    </section>
  );
}
