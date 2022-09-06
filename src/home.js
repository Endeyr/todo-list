import aside from './aside'
import footer from './footer'

let home = () => {
	let content = document.getElementById('content')

	// Header DOM
	let header = document.createElement('header')
	content.appendChild(header)

	let title = document.createElement('h1')
	title.innerText = 'To-Do'
	header.appendChild(title)

	let form = document.createElement('form')
	form.id = 'new-task-form'
	header.appendChild(form)

	let inputTask = document.createElement('input')
	inputTask.type = 'text'
	inputTask.id = 'new-task-input'
	inputTask.placeholder = 'What do you have planned?'
	form.appendChild(inputTask)

	// Submit Button
	let inputSubmit = document.createElement('input')
	inputSubmit.type = 'submit'
	inputSubmit.id = 'new-task-submit'
	inputSubmit.value = 'Add task'
	form.appendChild(inputSubmit)

	// Main DOM
	let main = document.createElement('main')
	content.appendChild(main)

	let section = document.createElement('section')
	section.classList = 'task-list'
	main.appendChild(section)

	let subTitle = document.createElement('h2')
	subTitle.innerText = 'Tasks'
	section.appendChild(subTitle)

	let tasks = document.createElement('div')
	tasks.id = 'tasks'
	section.appendChild(tasks)

	// Aside DOM
	if (!document.querySelector('aside')) {
		aside()
	}

	// Footer DOM
	if (!document.querySelector('footer')) {
		footer()
	}
}

export default home
