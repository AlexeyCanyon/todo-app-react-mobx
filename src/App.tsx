import { Box } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todolist from "./components/TodoList";
import React, { FC, useEffect, useState } from "react";
import { RootStore, useThemeStore, useTodoStore } from "./mobxStore/rootStore";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    const {addTodo} = useTodoStore();
    const { theme } = useThemeStore();
    
    const [name, setName] = useState<string>("");

    const addTodoHandler = () => {
        if (!name) {
            alert("You have to entere a name");
            return;
        }
        addTodo({ id: Math.random() * 1000, name, completed: false });
        setName("");
    };

    return (
        <div className="container" data-theme={theme}>
            <Header />
            <Box className="new_todo" data-theme={theme}>
                <Box
                    className="checkbox_container"
                    sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                ></Box>
                <input
                    required
                    value={name}
                    type="text"
                    placeholder="Create a new todo"
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            addTodoHandler();
                        }
                    }}
                />
                <Box>
                    <button className="new_todo-btn" onClick={addTodoHandler}>
                        Add
                    </button>
                </Box>
            </Box>
            <Todolist />
            <Footer />
        </div>
    );
});

export default App;
