import { useState } from "react";
import { ApiDelete, ApiPut } from "../common/fetchApi";

const ListItem = ({
  content,
  id,
  completed,
  isDeleted,
}: {
  content: string;
  id: string;
  completed: boolean;
  isDeleted: Function;
}): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const putApi = async () => {
    ApiPut(`${process.env.NEXT_PUBLIC_API_URL!}${id}`, {
      completed: !isCompleted,
    });
    setIsCompleted(!isCompleted);
  };

  const deleteApi = async () => {
    ApiDelete(`${process.env.NEXT_PUBLIC_API_URL!}${id}`);
    isDeleted(true);
  };

  return (
    <div className="alert m-5 flex justify-between shadow-lg ">
      <input
        type="checkbox"
        className="checkbox-success checkbox"
        checked={isCompleted}
        onChange={() => putApi()}
      />
      <span>{content}</span>
      <button onClick={deleteApi} className="btn-error btn">
        Delete
      </button>
    </div>
  );
};

export default ListItem;
