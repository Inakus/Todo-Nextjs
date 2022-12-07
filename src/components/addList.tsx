import { useState } from "react";
import { ApiPost } from "../common/fetchApi";

const AddList = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ApiPost(process.env.NEXT_PUBLIC_API_URL!, { content: input });
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 flex w-full items-center justify-center"
    >
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full max-w-xs"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default AddList;
