import React from "react";
import { useState } from "react";

const Todos = () => {
	const [tasks, setTasks] = useState([
		"Lavar ropa",
		"Limpiar arena del gato",
		"Estudiar",
	]);
	return (
		<ul>
			{tasks.map((item) => (
				<ListItem itemValue={itemText} />
			))}
		</ul>
	);
};
export default Todos;
