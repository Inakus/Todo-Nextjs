import React, { useState } from "react";
import { ApiDelete, ApiPut } from "../common/fetchApi";
import { useDataContext } from "../common/dataContext";

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

  const { setData } = useDataContext();

  const putApi = async () => {
    await ApiPut(`${process.env.NEXT_PUBLIC_API_URL!}${id}`, {
      completed: !isCompleted,
    }).catch((err) => {
      console.log(err);
    });
    setIsCompleted(!isCompleted);
  };

  const deleteApi = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await ApiDelete(`${process.env.NEXT_PUBLIC_API_URL!}${id}`)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
