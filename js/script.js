const emailInput = document.querySelector('.email-input')
const invalidIcon = document.querySelector('.invalid-icon')
const messageInvalid = document.querySelector('.message-invalid')
const form = document.querySelector('form')
const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]+$/;

function handleSubmit(e) {
	e.preventDefault()
	const emailValue = emailInput.value
	if(emailValue == '') {
		emailInput.classList.add('invalid-input')
		invalidIcon.style.display = 'block'
		messageInvalid.textContent = "Email Can't not empty"

	}else if(!regex.test(emailValue)) {
		emailInput.classList.add('invalid-input')
		invalidIcon.style.display = 'block'
		messageInvalid.textContent = "Please Provide a valid email"
	} else {
		e.target.submit()
	}


}
form.addEventListener('submit',handleSubmit)

// function emailValidation(e) {
// 	const value = e.target.value

// 	if(value == '') {
// 		e.target.classList.add('invalid-input')
// 		invalidIcon.style.display = 'block'
// 		messageInvalid.textContent = 'email can`t empty !'
// 	}else if(!regex.test(value)) {
// 		e.target.classList.add('invalid-input')
// 		invalidIcon.style.display = 'block'
// 		messageInvalid.textContent = ""
// 	} else {
// 		e.target.classList.remove('invalid-input')
// 		invalidIcon.style.display = 'none'

// 	}
// }
