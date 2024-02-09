import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferenceSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>How are we different from others</h3>
      <Button isActive={contentType === "way"} onClick={() => handleClick("way")}>
        Approach
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Accessibility
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Concentration
      </Button>

      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <p>Press the button</p>
      )}

      {/* {!contentType && <p>Press the button</p>}
    {contentType && <p>{differences[contentType]}</p>} 2nd method */}
    </section>
  );
}
