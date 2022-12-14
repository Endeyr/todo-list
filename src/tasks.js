let tasks = () => {
	// Local Storage
	// window.localStorage

	window.addEventListener('load', () => {
		let form = document.querySelector('#new-task-form')
		let input = document.querySelector('#new-task-input')
		let list_el = document.querySelector('#tasks')

		form.addEventListener('submit', (e) => {
			e.preventDefault()

			let task = input.value
			// Alert
			if (!task) {
				alert('Please fill out the task')
				return
			}
			// Task DOM
			let task_el = document.createElement('div')
			task_el.classList = 'task'

			let task_content_el = document.createElement('div')
			task_content_el.classList = 'content'
			task_el.appendChild(task_content_el)

			let task_input_el = document.createElement('input')
			task_input_el.classList = 'text'
			task_input_el.type = 'text'
			task_input_el.value = task
			task_input_el.setAttribute('readonly', 'readonly')
			task_content_el.appendChild(task_input_el)

			let task_actions_el = document.createElement('div')
			task_actions_el.classList = 'actions'

			let task_edit_el = document.createElement('button')
			task_edit_el.classList = 'edit'
			task_edit_el.innerHTML = 'Edit'

			let task_delete_el = document.createElement('button')
			task_delete_el.classList = 'delete'
			task_delete_el.innerHTML = 'Delete'

			task_actions_el.appendChild(task_edit_el)
			task_actions_el.appendChild(task_delete_el)

			task_el.appendChild(task_actions_el)

			list_el.appendChild(task_el)

			input.value = ''

			// Edit Button
			task_edit_el.addEventListener('click', () => {
				if (task_edit_el.innerText.toLowerCase() == 'edit') {
					task_input_el.removeAttribute('readonly')
					task_input_el.focus()
					task_edit_el.innerText = 'Save'
				} else {
					task_input_el.setAttribute('readonly', 'readonly')
					task_edit_el.innerText = 'Edit'
				}
			})

			// Delete Button
			task_delete_el.addEventListener('click', () => {
				list_el.removeChild(task_el)
			})
		})
	})
}

export default tasks
