import AddList from "./addList";
import List from "./list";

const Main = (): JSX.Element => {
  return (
    <main className="mt-10 flex w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Todo App</h1>
      <AddList />
      <List />
    </main>
  );
};

export default Main;
