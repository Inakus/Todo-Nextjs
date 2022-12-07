import { useEffect, useState } from "react";

import { ApiGet, IApi } from "../common/fetchApi";
import ListItem from "./listItem";

const List = (): JSX.Element => {
  const [data, setData] = useState<IApi[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    ApiGet(process.env.NEXT_PUBLIC_API_URL!).then((res: IApi[]) => {
      setData(res);
    });
  }, [isDeleted]);

  return (
    <div className=" flex w-[35%] flex-col items-center justify-center">
      {data.map((item) => (
        <ListItem
          key={item._id}
          content={item.content}
          id={item._id}
          completed={item.completed}
          isDeleted={(v: boolean) => {
            setIsDeleted(v);
          }}
        />
      ))}
    </div>
  );
};

export default List;
