import { useState } from "react"

function AddForm({ addNewTodo }) {
	const [newTodo, setNewTodo] = useState("")

	const handleAdd = (e) => {
		e.preventDefault()

		if (newTodo !== "") {
			addNewTodo(newTodo)
		}
		setNewTodo("")
	}

	return (
		<div className="addFormWrapper">
			<form action="">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button type="submit" onClick={(e) => handleAdd(e)}>
					Ajouter
				</button>
			</form>
		</div>
	)
}

export default AddForm
