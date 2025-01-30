import { useEffect, useState } from "react"

export default function useLocalStorage(initialValue) {
	const [todos, setTodos] = useState(
		() => JSON.parse(localStorage.getItem("todos")) || initialValue
	)

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	})

	return [todos, setTodos]
}
