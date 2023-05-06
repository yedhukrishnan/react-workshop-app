"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function FirstPost() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  if (name) {
    return (
      <h1
        style={{
          textAlign: "center",
          background: "#ffdfd2",
          padding: "20px 10px",
          color: "black",
        }}
      >
        Hello, {name}
      </h1>
    );
  } else {
    return <h1>Please tell us your name</h1>;
  }
}
