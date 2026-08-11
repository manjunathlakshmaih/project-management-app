import { useState } from "react";

const AddTag = ({ tags = [], addTag, removeTag }) => {
  const [tagInput, setTagInput] = useState("");
  console.log("tags:",tags);

  const handleAddTag = () => {
    if (!tagInput.trim()) return;

    if (typeof addTag === "function") {
      addTag(tagInput.trim());
    }
    setTagInput("");
  };

  return (
    <div className="space-y-3">
      <label className="pb-4">Tags</label>

      <div className="flex gap-2 items-start mt-3">
        <div className="min-h-12 flex items-center flex-wrap gap-2 px-2 py-2 rounded-xl bg-slate-800 border border-slate-700 w-80">
          {tags.map((tag, index) => (
            <div
              key={`${tag?.value ?? tag}-${index}`}
              className="flex items-center gap-2 px-2 py-1 rounded-full bg-violet-500/20 text-violet-300"
            >
              <span className="text-sm">{tag?.value ?? tag}</span>
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="text-violet-200 hover:text-white"
              >
                ✕
              </button>
            </div>
          ))}

          <input
            type="text"
            placeholder={tags.length ? "Add another tag" : "Enter tags..."}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag();
              }
            }}
            className="w-full h-5 px-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="px-3 h-8 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium"
          onClick={handleAddTag}
        >
          + Add Tag
        </button>
      </div>
    </div>
  );
};

export default AddTag;
