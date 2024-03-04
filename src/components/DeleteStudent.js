import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteStudent = ({ onDelete }) => {
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);

    try {
      // Make a DELETE request to delete the student based on the entered ID
      await axios.delete(`http://localhost:4000/Students/${studentId}`);

      // If successful, trigger the onDelete callback (if provided)
      if (onDelete) {
        onDelete(studentId);
      }

      // Clear the input field after successful deletion
      setStudentId("");

      // Display success toast notification
      toast.success("Student deleted successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
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

        <button
          onClick={handleDelete}
          disabled={loading || !studentId}
          className={`mt-2 p-2 bg-purple-600 text-white rounded-md w-full ${loading && "opacity-50 cursor-not-allowed"}`}
        >
          {loading ? "Deleting..." : "Delete Student"}
        </button>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
};

export default DeleteStudent;
