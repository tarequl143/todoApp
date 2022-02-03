import moment from "moment";
import { memo, useState } from "react";
import { TodoItemWrapper, TodoContent, TodoText, TodoActions, TodoDate, EditTodo, DeleteTodo, EditTodoForm, EditTodoInput, UpdateTodo } from "./TodoItem.Styles";
import { TodoItemProps } from "./Types";

export const TodoItemComp = ({id, text, date, isCompleted, updateHandler, deleteHandler}:TodoItemProps) => {

    const [todoEdit, setTodoEdit] = useState<boolean>(false);
	const [editedValue, setEditedValue] = useState<string>('');

    const editTodo = () => {
		setTodoEdit(true);
		setEditedValue(text);
	};
    console.log('rendering');
    

    return (
        <>
        {todoEdit ? (
            <EditTodoForm onSubmit={(e) => {
                e.preventDefault();
                updateHandler?.(id, editedValue);
                setEditedValue('');
                setTodoEdit(false);
            }}>
                <EditTodoInput
                    type='text'
                    value={editedValue}
                    autoFocus
                    autoComplete='off'
                    onBlur={() => {
                        updateHandler?.(id, editedValue);
                        setEditedValue('');
                        setTodoEdit(false);
                    }}
                    onChange={(e) => {
                        setEditedValue(e.target.value);
                    }}
                />
                <UpdateTodo type="submit">Update</UpdateTodo>
            </EditTodoForm>
            )
            :
            (
            <TodoItemWrapper>
                <TodoContent>
                    <TodoText>{text}</TodoText>
                    <TodoDate>{moment(date).format('Do MMMM YYYY, h:mm a')}</TodoDate>
                </TodoContent>
                <TodoActions>
                    <EditTodo onClick={(e) => {
                        e.preventDefault();
                        editTodo()
                    }}>
                        Edit
                    </EditTodo>
                    <DeleteTodo onClick={(e) => {
                        e.preventDefault();
                        deleteHandler?.(id)
                    }}>
                        Delete
                    </DeleteTodo>
                </TodoActions>
            </TodoItemWrapper>
            )
        }
        </>
    )
}

export const TodoItem = memo(TodoItemComp);