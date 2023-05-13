import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const TABLE_NAME = "marks";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const read = async (studentId) =>
  await supabase.from(TABLE_NAME).select().eq("student_id", studentId).single();

export const insert = (data) =>
  supabase.from(TABLE_NAME).insert(data).select().single();

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
