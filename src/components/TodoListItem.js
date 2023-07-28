import React from "react";
import styles from './TodoListItem.module.css';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";

// props.todo로 전달받은 객체 데이터 {id:아이디값, text:text값, checked:boolean형}
const TodoListItem = (props) => {
// const TodoListItem = () => {
    return(
        <div className={styles.TodoListItem}>
            <div className={styles.checkbox}>
                {/* 삼항 연산자로 체크여부를 따져서 체크된 아이콘이 보일지 아니면 체크안된 아이콘이 보일지 결정 */}
                {props.todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <MdCheckBoxOutlineBlank />
                <div className={styles.checkbox}>{props.todo.text}</div>
            </div>
            <div className={styles.remove}>
                <MdRemoveCircleOutline />
            </div>
        </div>
        // <div className="TodoListItem">
        //     <div className="checkbox">
        //         <MdCheckBoxOutlineBlank />
        //         <div className="text">할 일</div>
        //     </div>
        //     <div className="remove">
        //         <MdRemoveCircleOutline />
        //     </div>
        // </div>
    );
};

export default TodoListItem;