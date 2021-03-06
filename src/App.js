import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="App">
			<header>
				<h1> Ollis Todo List</h1>
			</header>

			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			/>
			<TodoList />
			<p>text to add:{inputText}</p>
		</div>
	);
}
