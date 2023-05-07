import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Greet() {
  const router = useRouter();
  const { query } = router;

  const [name, setName] = useState("");

  useEffect(() => {
    setName(window.localStorage.getItem("name"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
        placeholder="Enter your name"
      />

      <h1
        style={{
          textAlign: "center",
          background: "#ffdfd2",
          padding: "20px 10px",
        }}
      >
        {name ? `Hello, ${name}` : "Please tell us your name"}
      </h1>
    </>
  );
}
