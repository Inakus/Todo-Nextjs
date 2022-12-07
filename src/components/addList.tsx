import { useState } from "react";

import { ApiGet, ApiPost } from "../common/fetchApi";

const AddList = () => {
  const [newInput, setNewInput] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!newInput) return;
    await ApiPost(process.env.NEXT_PUBLIC_API_URL!, { content: newInput });
    setNewInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 flex items-center justify-center"
    >
      <div className="input-group flex items-center justify-center">
        <input
          type="text"
          placeholder="Search…"
          className="input-bordered input"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button type="submit" className="btn-square btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddList;
