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
        <table>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Maths</th>
            <th>Physics</th>
          </tr>
          <tr>
            <td>{studentData.student_id}</td>
            <td>{studentData.student_name}</td>
            <td>{studentData.maths}</td>
            <td>{studentData.physics}</td>
          </tr>
        </table>
      )}
    </div>
  );
}
