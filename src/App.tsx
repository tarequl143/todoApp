import { useCallback, useEffect, useState } from "react";
import { AppContainer, AppTitle, NoTodo, TodosTitle, TodosWrapper } from "./App.Styles";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { createObjectId } from "./Utils";

type Todo = {
  id:string;
  text: string;
  date: string;
  isCompleted: boolean;
}


function App() {

  // Necessary States
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add New Todo Item
  const addTodo = useCallback((todo:string) => {
    if(todo.length && !/^ *$/.test(todo)) {
      const id = createObjectId();
      const newTodo = {
        id,
        text: todo,
        date: new Date().toString(),
        isCompleted: false
      }
      setTodos(prev => {
        const updatedTodos = [newTodo, ...prev];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return updatedTodos
      });
    } else {
      alert("You didn't type any text. Please type a text");
    }
  },[]);

  // Update Todo Item
  const updateTodo = useCallback((id: string, todo:string) => {
    if(todo.length && !/^ *$/.test(todo)) {
      setTodos(prev => {
        const updatedTodos = prev.map(todoItem => todoItem.id === id ? {...todoItem, text: todo, date: new Date().toString()} : todoItem);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
    }
  },[]);

  // Delete Todo Item
  const deleteTodo = useCallback((id:string) => {
    if(!id) {
      alert('ID not found');
      return;
    };
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if(confirmDelete) {
      setTodos(prev => {
        const updatedTodos = prev.filter(todo => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      
    }
  },[]);

  // Update State From LocalStorage
  useEffect(() => {
    const todoItems = localStorage.getItem("todos");
    if(todoItems) {
      setTodos(JSON.parse(todoItems as string));
    }
  },[]);

  return (
    <AppContainer>
      <AppTitle>Simple todo app</AppTitle>
      <TodoForm handler={addTodo} />
      <TodosTitle>
        Todos
      </TodosTitle>
      <TodosWrapper>
        {todos.length ? 
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              date={todo.date}
              isCompleted={todo.isCompleted}
              deleteHandler={deleteTodo}
              updateHandler={updateTodo}
            />
            )
          ) : <NoTodo>You don't have any todo item. Please create todo.</NoTodo>
        }
      </TodosWrapper>
    </AppContainer>
  )
}

export default App;
