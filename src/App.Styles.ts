import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 700px;
    max-width: 100%;
    margin: 20px auto;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    height: calc(100vh - 40px);
    padding: 0 20px;
`

export const AppTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin: 0;
    padding: 20px 0;
    text-transform: capitalize;
    text-align: center;
`

export const TodosTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
    text-align: left;
`

export const TodosWrapper = styled.div`
    display: block;
    height: calc(100% - 200px);
    overflow-y: auto;
`

export const NoTodo = styled.div`
    padding: 15px;
    text-align: center;
    width: 100%;
    background-color: #eeeeee;
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    border-radius: 5px;
`