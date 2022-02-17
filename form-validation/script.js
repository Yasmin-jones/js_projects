const username = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


//prevents the page from submitting if the name and password contains errors
form.addEventListener('submit', (e) => {
    let messages = [ ]
    if (username.value === '' || username.value === null) {
        messages.push('Name is required')
    }

    if (password.value.length <=6) {
        messages.push('Password must be a minimum of 6 characters')
    }

    if (password.value.length >=15) {
        messages.push('password must be less than 15 characters')
    }

    if(password.value === 'password') {
        messages.push('Your Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerHTML = messages.join(', ')
    }
})
