"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 animate-fadeIn  py-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2 transition duration-300 outline-none ease-in-out transform focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:scale-105 focus:shadow-outline"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2 transition outline-none duration-300 ease-in-out transform focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:scale-105 focus:shadow-outline"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 hover:bg-green-700 font-bold text-white py-3 px-6  transition duration-300 ">
        Update Topic
      </button>
    </form>
  );
}