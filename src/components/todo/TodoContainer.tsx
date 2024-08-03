import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-auto rounded-xl p-[5px] ">
        <div className="bg-white p-5 space-y-3 rounded-md w-full h-full">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p> There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
