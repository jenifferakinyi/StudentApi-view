import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    setLoading(true);

    try {
      // Make a PUT request to update the student based on the entered ID
      await axios.put(`http://localhost:4000/Students/${studentId}`, {
        firstname: firstName,
        lastname: lastName,
        gender: gender,
      });

      // Clear input fields after successful update
      setStudentId("");
      setFirstName("");
      setLastName("");
      setGender("");

      // Display success toast notification
      toast.success("Student updated successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <label htmlFor="studentId" className="block text-sm font-medium text-purple-600">
          Student ID:
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <label htmlFor="firstName" className="block mt-3 text-sm font-medium text-purple-600">
          First Name:
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <label htmlFor="lastName" className="block mt-3 text-sm font-medium text-purple-600">
          Last Name:
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <label htmlFor="gender" className="block mt-3 text-sm font-medium text-purple-600">
          Gender:
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <button
          onClick={handleUpdate}
          disabled={loading || !studentId || !firstName || !lastName || !gender}
          className={`mt-3 p-2 bg-purple-600 text-white rounded-md w-full ${loading && "opacity-50 cursor-not-allowed"}`}
        >
          {loading ? "Updating..." : "Update Student"}
        </button>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}

        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </div>
    </div>
  );
};

export default UpdateStudent;
