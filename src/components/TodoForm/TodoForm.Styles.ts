import styled from "styled-components";

export const TodoFormWrapper = styled.div`
    width: 100%;
`
export const TodoFormElem = styled.form`
    width: 100%;
    position: relative;
    padding: 0;
    margin: 0 0 20px 0;
`
export const TodoInput = styled.input`
    width: 100%;
    padding: 0 115px 0 15px;
    height: 44px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    &:focus {
        outline: none;
        border-color: rgba(91, 105, 179, 1);
    }
`

export const Button = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background-color: rgba(91, 105, 179, 0.7);
    font-weight: 600;
    color: #ffffff;
    border: none;
    box-shadow: none;
    &:hover {
        background-color: rgba(91, 105, 179, 1);
    }
`