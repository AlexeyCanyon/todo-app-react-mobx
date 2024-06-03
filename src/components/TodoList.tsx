import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { observer } from "mobx-react-lite";
import { useThemeStore, useTodoStore } from "../mobxStore/rootStore";


const Todolist = observer(() => {
    const {todos, deleteTodo, clearCompleted, activeTodos, completedTodos} = useTodoStore();
    const { theme } = useThemeStore();
    const [visibleTodos, setVisibleTodos] = useState("all");

    useEffect(() => {
        todos && localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const currentTodos =
        visibleTodos == "all"
            ? todos
            : visibleTodos == "active"
            ? activeTodos
            : visibleTodos == "completed"
            ? completedTodos
            : todos;

    return (
        <Box className="Card">
            <Box className="todo_list">
                {todos &&
                    currentTodos?.map(
                        (
                            item: {
                                id: number;
                                name: string;
                                completed: boolean;
                            },
                            index: number
                        ) => (
                            <TodoItem
                                key={item.id}
                                todo={item}
                                deleteTodo={deleteTodo}
                            />
                        )
                    )}
                <Box className="controls" data-theme={theme}>
                    <Box>
                        <span>{currentTodos?.length | 0} items left</span>
                    </Box>
                    <Box className="segregate" data-theme={theme}>
                        <button
                            className={`segregate-btn ${
                                visibleTodos == "all" && "active"
                            }`}
                            id="all"
                            onClick={() => setVisibleTodos("all")}
                        >
                            All
                        </button>
                        <button
                            className={`segregate-btn ${
                                visibleTodos == "active" && "active"
                            }`}
                            id="active"
                            onClick={() => setVisibleTodos("active")}
                        >
                            Active
                        </button>
                        <button
                            className={`segregate-btn ${
                                visibleTodos == "completed" && "active"
                            }`}
                            id="completed"
                            onClick={() => setVisibleTodos("completed")}
                        >
                            Completed
                        </button>
                    </Box>
                    <Box className="clear" data-theme={theme}>
                        <button
                            className="clear-btn"
                            data-theme={theme}
                            onClick={() => clearCompleted()}
                        >
                            Clear Completed
                        </button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
});

export default Todolist;
