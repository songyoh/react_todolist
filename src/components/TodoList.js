import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css"

// props로 전달된 todos를 이용해 map형식으로 출력
const TodoList = (props) => {
    const TodoListItems = props.todos.map(todo =>{
        return <TodoListItem todo={todos} key={todo.id}/>
    });

    return(
        <div className={styles.TodoList}>
            {/* <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/> */}
            <TodoListItem todo={todos} key={todo.id} />
            {/* {TodoListItems} */}
        </div>
    );
};

export default TodoList;