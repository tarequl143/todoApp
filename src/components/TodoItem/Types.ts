export type TodoItemProps = {
    id: string;
    text: string;
    date: string;
    isCompleted: boolean;
    updateHandler?:CallableFunction;
    deleteHandler?:CallableFunction;
}