import "./TodoList.css";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import IconCross from "../assets/iconCross.svg";
import { completeTodo } from "../store/todos-slice";
import { Todo } from "../mobxStore/todoStore";
import { observe } from "mobx";
import { observer } from "mobx-react-lite";
import { useTodoStore } from "../mobxStore/rootStore";

export type TodoProps = {
    todo: Todo;
    deleteTodo: (todo: Todo) => void
};

const TodoItem = ({ todo, deleteTodo }: TodoProps) => {
    const {completeTodo} = useTodoStore();
    const {completed, id, name} = todo;

    function completedHandler() {
        // Просто пример!!!!!
        // todo.completed = !todo.completed;
        completeTodo(todo);
    }

    return (
        <div className="todo_item">
            <Box
                className="checkbox_container"
                sx={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button
                    onClick={completedHandler}
                    className={`${completed ? "checkbox-checked" : "checkbox"}`}
                ></button>
            </Box>
            <Box
                sx={{ flex: "1", padding: "10px" }}
                className={`${completed ? "todo--completed" : ""}`}
            >
                {name}
            </Box>
            <Box>
                <button className="todo_item--btn" onClick={() => deleteTodo(todo)}>
                    <img src={IconCross}></img>
                </button>
            </Box>
        </div>
    );
};

export default TodoItem;
