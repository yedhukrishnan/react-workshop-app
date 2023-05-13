import { useState, useEffect } from "react";
import { read } from "@/lib/database";

export default function Student() {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState({});

  const loadStudentData = async () => {
    console.log(studentId);
    console.log("clicked");
    const { data, error } = await read(studentId);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setStudentData(data);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your ID"
        value={studentId}
        onChange={(event) => setStudentId(event.target.value)}
      />
      <button onClick={loadStudentData}>Submit</button>

      {studentData.student_id && (
        <pre>{JSON.stringify(studentData, null, 2)}</pre>
      )}

    </div>
  );
}
