import { useEffect, useRef, useState } from "react";

function RefComp() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState<Boolean>(false);
  const handleShow = () => {
    setShow(!show);
    if (passwordRef.current) {
      passwordRef.current.type = !show ? "text" : "password";
    }
  };

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  console.log(passwordRef.current?.value);

  return (
    <div>
      <input
        ref={passwordRef}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default RefComp;
