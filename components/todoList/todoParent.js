import { useState } from "react";
import FormTodo from "./form";
import Todos from "./todo";
import { Text, View } from "react-native";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (tex) => {
    const newTodos = [...todos, { text: tex, isDone: false }];
    setTodos(newTodos);
    console.log(newTodos);
    console.log(todos);
  };

  const deleteTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const doneTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].isDone = true;
    setTodos(newTodos);
  };

  return (
    <View className="app">
      <View className="container">
        <Text
          style={{
            marginVertical: 50,
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Todo List
        </Text>
        <FormTodo addTodo={addTodo} />

        {todos.map((todo, i) => (
          <Todos
            key={i}
            index={i}
            todo={todo}
            doneTodo={doneTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </View>
    </View>
  );
};

export default ToDo;
