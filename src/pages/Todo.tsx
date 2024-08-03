import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/container";

const Todo = () => {
  return (
    <Container>
      <TodoContainer></TodoContainer>
      <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>
    </Container>
  );
};

export default Todo;
