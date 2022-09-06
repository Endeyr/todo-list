let storage = () => {
	window.addEventListener('load', () => {
		let todos = JSON.parse(localStorage.getItem('todos')) || []
		const taskInput = document.querySelector('#tasks')

		taskInput.addEventListener('submit', (e) => {
			e.preventDefault()

			const todo = {
				text: e.target.elements.text.value,
			}

			todos.push(todo)

			localStorage.setItem('todos', JSON.stringify(todos))

			e.target.reset()
		})
	})
}

export default storage
