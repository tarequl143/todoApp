import { FormEventHandler, memo, useState } from "react";
import { TodoFormWrapper, TodoInput, Button, TodoFormElem } from "./TodoForm.Styles";
import { TodoFormProps } from "./Types";

export const TodoFormComp = ({handler}: TodoFormProps) => {
    const [todo, setTodo] = useState<string>('');

    const onSubmitForm = () => {
        handler?.(todo);
        setTodo('');
    }
    
    return (
        <TodoFormWrapper>
        <TodoFormElem onSubmit={(e) => {
                e.preventDefault();
                onSubmitForm();
            } }>
            <TodoInput type="text" placeholder="Add new todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <Button type="submit">Add Todo</Button>
        </TodoFormElem>
    </TodoFormWrapper>
    )
}

export const TodoForm = memo(TodoFormComp);