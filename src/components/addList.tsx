import { useState } from "react";
import { ApiPost } from "../common/fetchApi";

const AddList = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    ApiPost(process.env.NEXT_PUBLIC_API_URL!, { content: input });
    setInput("");
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn-square btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddList;
