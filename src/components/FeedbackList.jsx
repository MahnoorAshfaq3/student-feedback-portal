
function FeedbackList({ feedbacks, setFeedbacks, setEditData }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this feedback?")) {
            setFeedbacks((prev) => prev.filter((fb) => fb.id !== id));
        }
    };

    return (
        <>
            <div className="bg-slate-700 p-4 rounded-xl mb-4 border border-slate-600">

                <h2 className="text-xl font-semibold mb-2">Feedback List</h2>

                {feedbacks.length === 0 && (
                    <p className="text-sm text-gray-500">No feedback available.</p>
                )}

                {feedbacks.map((fb) => (
                    <div className="text-sm text-gray-500 feedback-item" key={fb.id}>
                        <p className="text-slate-200"><strong>Name:</strong> {fb.name}</p>
                        <p className="text-slate-200"><strong>Subject:</strong> {fb.subject}</p>
                        <p className="text-slate-200"><strong>Rating:</strong> {"⭐".repeat(fb.rating)}</p>
                        <p className="text-slate-200"><strong>Feedback:</strong> {fb.message}</p>

                        <div className="flex gap-2 mt-2">
                            <button
                                className="px-3 py-1 bg-amber-500 text-black rounded hover:bg-amber-600"
                                onClick={() => setEditData(fb)}> Edit
                            </button>
                            <button
                                className="px-3 py-1 bg-rose-600 text-white rounded hover:bg-rose-700"
                                onClick={() => handleDelete(fb.id)}>  Delete
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default FeedbackList;

