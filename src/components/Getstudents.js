import React, { useState, useEffect } from "react";
import axios from "axios";

const GetStudents = () => {
    //state hooks manage the state of the component
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetching data from api with use of useEffect
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Students");
        setStudents(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  //conditional rendering
  
   if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">Error: {error}</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden my-8">
      <h2 className="text-2xl font-semibold bg-gray-200 p-4">Student List</h2>
      <ul className="divide-y divide-gray-300">
        {students.map((student) => (
          <li key={student.id} className="p-4">
            <span className="font-bold">{student.firstname} {student.lastname}</span> - {student.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetStudents;
