import { useState } from "react";
import { DataContext } from "../common/dataContext";
import { IApi } from "../common/fetchApi";
import AddList from "./addList";
import List from "./list";

const Main = (): JSX.Element => {
  const [data, setData] = useState<IApi[]>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <main className="mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Todo App</h1>
        <AddList />
        <List />
      </main>
    </DataContext.Provider>
  );
};

export default Main;
