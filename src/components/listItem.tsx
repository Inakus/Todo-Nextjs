import { useState } from "react";
import { ApiDelete, ApiPut } from "../common/fetchApi";

const ListItem = ({
  content,
  id,
  completed,
}: {
  content: string;
  id: string;
  completed: boolean;
}): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const putApi = async () => {
    await ApiPut(`${process.env.NEXT_PUBLIC_API_URL!}${id}`, {
      completed: !isCompleted,
    });
    setIsCompleted(!isCompleted);
  };

  const deleteApi = async () => {
    await ApiDelete(`${process.env.NEXT_PUBLIC_API_URL!}${id}`);
  };

  return (
    <form className="alert m-5 flex justify-between shadow-lg ">
      <input
        type="checkbox"
        className="checkbox-success checkbox"
        checked={isCompleted}
        onChange={() => putApi()}
      />
      {!isCompleted && <span>{content}</span>}
      {isCompleted && <span className="line-through">{content}</span>}
      <button onClick={deleteApi} className="btn-error btn">
        Delete
      </button>
    </form>
  );
};

export default ListItem;
