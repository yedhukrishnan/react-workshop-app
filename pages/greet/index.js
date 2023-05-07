import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Greet() {
  const router = useRouter();
  const { query } = router;

  const [name, setName] = useState(query.name);

  useEffect(() => {
    if (name) {
      window.localStorage.setItem("name", name);
    } else {
      setName(window.localStorage.getItem("name"));
    }
  }, []);

  return (
    <h1
      style={{
        textAlign: "center",
        background: "#ffdfd2",
        padding: "20px 10px",
      }}
    >
      {name ? `Hello, ${name}` : "Please tell us your name"}
    </h1>
  );
}
