import { useEffect, useState } from "react";

import { ApiGet, IApi } from "../common/fetchApi";
import ListItem from "./listItem";
import { useDataContext } from "../common/dataContext";

const List = (): JSX.Element => {
  const { data, setData } = useDataContext();

  useEffect(() => {
    const getData = async () => {
      return await ApiGet(process.env.NEXT_PUBLIC_API_URL!).then(
        (res: IApi[]) => {
          setData(res);
        }
      );
    };
    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className=" flex w-[35%] flex-col items-center justify-center">
      {data.map((item) => (
        <ListItem
          key={item._id}
          content={item.content}
          id={item._id}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default List;
