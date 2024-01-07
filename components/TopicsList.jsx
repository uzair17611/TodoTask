import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <div className="flex flex-col items-center mt-10">
    {topics.length === 0 ? (
      <div className="w-full max-w-[600px] h-[300px] rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 opacity-75 shadow-lg animate-fadeInScale flex items-center">
        <p className="m-auto text-lg font-semibold text-gray-700 animate-pulse">
          No tasks for today
        </p>
      </div>
      ) : (
        topics.map((t) => (
          <div
            key={t._id}
            className="w-full max-w-[600px] p-4 border border-slate-300 my-4 flex flex-col gap-5 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h2 className="font-bold text-xl md:text-2xl">
                  Topic: {t.title}
                </h2>
                <div className="text-sm md:text-base">
                  Description: {t.description}
                </div>
                <div className="text-sm md:text-base">
                  Created At: {new Date(t.createdAt).toLocaleDateString()}
                </div>
                <div className="text-sm md:text-base">
                  isCompleted : {t.isCompleted ? "Completed" : "Not Completed"}
                </div>
              </div>

              <div className="flex items-center mb-16 md:mt-0">
                <Link href={`/editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <RemoveBtn id={t._id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
