import { useEffect, useState } from "react";
import Rating from "./Rating";

function FeedbackForm({ setFeedbacks, editData, setEditData }) {
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [department, setDepartment] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");
    const [rating, setRating] = useState(0);
    const [type, setType] = useState("");
    const [recommend, setRecommend] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setRollNo(editData.rollNo);
            setDepartment(editData.department);
            setSemester(editData.semester);
            setSubject(editData.subject);
            setRating(editData.rating);
            setType(editData.type);
            setRecommend(editData.recommend);
            setMessage(editData.message);
        }
    }, [editData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editData) {
            setFeedbacks((prev) =>
                prev.map((fb) =>
                    fb.id === editData.id
                        ? {
                            ...fb,
                            name,
                            rollNo,
                            department,
                            semester,
                            subject,
                            rating,
                            type,
                            recommend,
                            message,
                        }
                        : fb
                )
            );
            setEditData(null);
        } else {
            setFeedbacks((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    name: name || "Anonymous",
                    rollNo,
                    department,
                    semester,
                    subject,
                    rating,
                    type,
                    recommend,
                    message,
                    date: new Date().toLocaleDateString(),
                },
            ]);
        }

        setName("");
        setRollNo("");
        setDepartment("");
        setSemester("");
        setSubject("");
        setRating(0);
        setType("");
        setRecommend("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            {/* Name */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Student Name</label>
                <input
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Optional"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* Roll No */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Roll No / Student ID</label>
                <input
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                />
            </div>

            {/* Department */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Department</label>
                <input
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g. Computer Science"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </div>

            {/* Semester */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Semester</label>
                <select
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                >
                    <option value="">Select Semester</option>
                    <option>1st</option>
                    <option>2nd</option>
                    <option>3rd</option>
                    <option>4th</option>
                    <option>5th</option>
                    <option>6th</option>
                    <option>7th</option>
                    <option>8th</option>
                </select>
            </div>

            {/* Subject */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Subject / Teacher</label>
                <input
                    required
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>

            {/* Rating */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Rating</label>
                <Rating rating={rating} setRating={setRating} />
            </div>

            {/* Feedback Type */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Feedback Type</label>
                <select
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option>Suggestion</option>
                    <option>Complaint</option>
                    <option>Appreciation</option>
                </select>
            </div>

            {/* Recommendation */}
            <div>
                <label className="flex font-medium text-slate-300 mb-1">
                    Would you recommend this course/teacher?
                </label>
                <div className="flex gap-4 text-slate-300 mb-1">
                    <label className="flex items-center gap-1 ">
                        <input
                            className="flex items-center gap-1"
                            type="radio"
                            value="Yes"
                            checked={recommend === "Yes"}
                            onChange={(e) => setRecommend(e.target.value)}
                        />
                        Yes
                    </label>
                    <label className="flex font-medium gap-1 ">
                        <input
                            className="flex items-center gap-1"
                            type="radio"
                            value="No"
                            checked={recommend === "No"}
                            onChange={(e) => setRecommend(e.target.value)}
                        />
                        No
                    </label>
                </div>
            </div>

            {/* Message */}
            <div>
                <label className="block font-medium text-slate-300 mb-1">Feedback Message</label>
                <textarea
                    required
                    className="w-full bg-slate-700 text-slate-100 border border-slate-600 
           p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="write your text here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg  hover:bg-indigo-700 transition-colors duration-200">
                {editData ? "Update Feedback" : "Submit Feedback"}
            </button>
        </form>
    );
}

export default FeedbackForm;
