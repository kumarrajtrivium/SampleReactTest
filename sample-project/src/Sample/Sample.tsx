import { useEffect, useRef, useState } from "react";
const Sample = () => {
  const ref = useRef<HTMLInputElement>(null); //manipulate the textbox or html textbox control
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "Hello World!";
  });
  const [showMessage, setShowMessage] = useState(false);
  function onMouseLeave() {
    setShowMessage(false);
  }
  function onMouseEnter() {
    setShowMessage(true);
  }
  return (
    <div>
      <input
        ref={ref}
        type="text"
        id="t1"
        className="forms controls"
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      ></input>
      {showMessage && <h1>Mouse Enter</h1>}
    </div>
  );
};
export default Sample;
