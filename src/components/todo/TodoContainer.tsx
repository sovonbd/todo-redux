import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("");
  // console.log(priority);

  // From server
  // const { data, isLoading, isError } = useGetTodosQuery(priority);

  // another way server
  // const { data, isLoading, isError } = useGetTodosQuery(undefined, {
  //   refetchOnMountOrArgChange: true,
  // });

  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-auto rounded-xl p-[5px] ">
        <div className="bg-white p-5 space-y-3 rounded-md w-full h-full">
          {/* {data?.data.map((item)=>(<TodoCard {...item}/>))} */}
          {todos.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
          {/* <TodoCard /> */}
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p> There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
