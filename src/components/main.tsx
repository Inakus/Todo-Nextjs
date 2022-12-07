import AddList from "./addList";

const Main = (): JSX.Element => {
  return (
    <main className="mt-10 flex w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Todo App</h1>
      <AddList />
      <div></div>
    </main>
  );
};

export default Main;
