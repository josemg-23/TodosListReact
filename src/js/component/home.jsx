import React from "react";

import Todos from "./list.jsx";

//create your first component
const Lista = () => {
	return (
		<div>
			<h1>ToDos List</h1>
			<ul>{Todos}</ul>
		</div>
	);
};
export default Lista;
