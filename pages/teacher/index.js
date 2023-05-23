import { useState, useEffect } from "react";
import { insert } from "@/lib/database";

export default function Teacher() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [physicsMarks, setPhysicsMarks] = useState(0);
  const [mathsMarks, setMathsMarks] = useState(0);

  const [error, setError] = useState("");

  const storeStudentData = async () => {
    console.log(studentId);
    await insert({
      student_id: studentId,
      student_name: studentName,
      maths: mathsMarks,
      physics: physicsMarks,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(event) => setStudentId(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Marks for Maths"
        value={mathsMarks}
        onChange={(event) => setMathsMarks(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Marks for Physics"
        value={physicsMarks}
        onChange={(event) => setPhysicsMarks(event.target.value)}
      />
      <button onClick={storeStudentData}>Submit</button>

      {error && <p>{error}</p>}
    </div>
  );
}
