"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css"

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const validateForm = () => {
    if (!title || !description) {
      setError("Title and description are required.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-auto justify-center align-center gap-3 p-4 border border-gray-300 rounded-lg w-[500px]">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-gray-300 px-4 py-2 rounded focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        type="text"
        placeholder="Topic Description"
      />

      {error && (
        <div className="text-red-500 text-sm transition duration-300 ease-in-out transform translate-y-2 opacity-0 animate-slideup">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform active:scale-95"
      >
        New TODO Task
      </button>
    </form>
  );
}

