const emojis = ["😡", "😐", "🙂", "😃", "🤩"];

function Rating({ rating, setRating }) {
    return (
        <div className="flex gap-3 mt-2">
            {emojis.map((emoji, index) => {
                const value = index + 1;
                const isSelected = rating === value;

                return (
                    <button
                        type="button"
                        key={value}
                        onClick={() => setRating(value)}
                        className={`
              text-3xl p-2 rounded-full transition-all duration-200
              ${isSelected
                                ? "bg-indigo-600 ring-2 ring-indigo-400 scale-110"
                                : "bg-slate-700 opacity-60 hover:opacity-100"}
            `}
                    >

                        {emoji}
                    </button>

                );
            })}
        </div>
    );
}

export default Rating;
