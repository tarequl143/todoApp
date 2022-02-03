import styled from "styled-components";

export const TodoItemWrapper = styled.div<{isHeading?: boolean}>`
    position: relative;
    padding: 8px 80px 8px 12px;
    margin: 0 0 8px 0;
    background-color: ${props => props.isHeading ? 'rgba(91, 105, 179, 1);' : '#ffffff'};
    border: 1px solid #d4d4d4;
    border-radius: 5px;
`

export const TodoContent = styled.div`
    width: 100%;
    padding-right: 20px;
`

export const TodoText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`
export const TodoDate = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    margin: 5px 0 0 0;
`

export  const TodoActions = styled.div`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
`

export const EditTodo = styled.button`
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    background-color: rgba(245, 163, 39, 0.8);
    padding: 5px 12px;
    border-radius: 4px;
    border: none;
    box-shadow: none;
    margin-right: 8px;
    cursor: pointer;
    &:hover {
        background-color: rgba(245, 163, 39, 1);
    }
`

export const DeleteTodo = styled.button`
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    background-color: rgba(222, 51, 14, 0.8);
    padding: 5px 12px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    box-shadow: none;
    &:hover {
        background-color: rgba(222, 51, 14, 1);
    }
`

export const EditTodoForm = styled.form`
    position: relative;
    padding: 12px 90px 12px 12px;
    margin: 0 0 8px 0;
    background-color: rgba(91, 105, 179, 0.2);
    border: 1px solid rgba(91, 105, 179, 1);
    border-radius: 5px;
    border: none;
    &:focus {
        outline: none;
    }
`

export const EditTodoInput = styled.input`
    height: 32px;
    width: 100%;
    background-color: transparent;
    font-weight: 400;
    font-size: 16px;
    &:focus {
        outline: none;
        border: none;
    }
`
export const UpdateTodo = styled.button`
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    background-color: rgba(91, 105, 179, 0.7);
    padding: 5px 12px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    box-shadow: none;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
        background-color: rgba(91, 105, 179, 1);
    }
`