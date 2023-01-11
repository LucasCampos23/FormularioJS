const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Verifica se o nome esta vazio
    if (nameInput.value === '') {
        alert('Por favor, preencha o seu Nome!')
        return
    }

    // Verifica se o e-mail está preenchido e se é valido
    if (emailInput.value === ''|| !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha o seu E-mail!')
        return
    }

    // Verificar se a senha está preenchida 
    if (!validatePassword(passwordInput.value, 8)) {
        alert('A Senha precisa de no minimo 8 digitos!')
        return
    }

    // Verificar se a situação foi selecionada
    if (jobSelect.value === '') {
        alert('Por favor, selecione a sua situação!')
        return
    }

    // Verifica se mensagem esta prenchida
    if (messageTextarea.value === '') {
        alert('Por favor, escreva uma mensagem!')
        return
    }
    

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit()
})

// Função que valida e-mail
function isEmailValid (email) {

    // Criar uma regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true
    }

    return false
}

// Função que valida a senha 
function validatePassword(password, minDigits) {
    if (password.length >=minDigits) {
        // Senha valida
        return true
    }

    // Senha Invalida
    return false
}