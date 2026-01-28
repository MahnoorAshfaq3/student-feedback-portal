import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editData, setEditData] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const filteredFeedbacks = feedbacks.filter((fb) => {
    if (filter === "4plus") return fb.rating >= 4;
    if (filter === "5") return fb.rating === 5;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-400 p-6">
      <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-slate-100">
          Student Feedback Portal
        </h1>

        <p className="text-center text-slate-400 mt-1">
          You have submitted {feedbacks.length} feedback(s)
        </p>

        <FeedbackForm
          setFeedbacks={setFeedbacks}
          editData={editData}
          setEditData={setEditData}
        />

        <div className="mt-6 text-center">
          <select
            className="bg-slate-700 text-slate-200 border border-slate-600 p-2 m-3 rounded"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Show All</option>
            <option value="4plus">4 ⭐ and above</option>
            <option value="5">Only 5 ⭐</option>
          </select>
        </div>

        <FeedbackList
          feedbacks={filteredFeedbacks}
          setFeedbacks={setFeedbacks}
          setEditData={setEditData}
        />
      </div>
    </div>

  );
}

export default App;
