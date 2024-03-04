import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="flex space-x-4 mb-4"></div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className=" border-b">Firstname</th>
              <th className=" border-b">Lastname</th>
              <th className=" border-b">Gender</th>
              <th className=" border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.firstname}</td>
                <td className="py-2 px-4 border-b">{student.lastname}</td>
                <td className="py-2 px-4 border-b">{student.gender}</td>
                <td className="py-2 px-4 border-b">
                <Link
  to={`/getstudents/${student.id}`}
  className="btn-link pl-9 inline-block bg-purple-600 text-white font-bold py-2 px-2 rounded"
>
  Getstudents
</Link>

                  <Link
                    to="/updatestudents"
                    className="btn-link pl-7 inline-block bg-blue-700 text-white font-bold py-2 px-2 rounded"
                  >
                    UpdateStudent
                  </Link>
                  <Link
                    to="/deletestudents"
                    className="inline-block bg-red-600 text-white font-bold py-2 px-2 rounded"
                  >
                    Deletestudents
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
