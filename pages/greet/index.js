import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();
  const { query } = router;

  const name = query.name;

  if (name) {
    return (
      <h1
        style={{
          textAlign: "center",
          background: "#ffdfd2",
          padding: "20px 10px",
        }}
      >
        Hello, {name}
      </h1>
    );
  } else {
    return <h1>Please tell us your name</h1>;
  }
}
