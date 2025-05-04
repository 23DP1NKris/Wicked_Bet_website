let loading = false
const BUTTON = document.getElementById('formSubmit')
const form = document.getElementById('contactForm')
const errorMsg = document.getElementById('formError')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (loading) return
    loading = true
    BUTTON.innerHTML = 'Loading...'

    const nameInput = document.querySelector('input[placeholder="Your Name"]')
    const emailInput = document.querySelector('input[placeholder="Your Email"]')
    const subjectInput = document.querySelector('input[placeholder="Subject"]')
    const messageInput = document.querySelector('textarea[placeholder="Your Message"]')

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const subject = subjectInput.value.trim()
    const message = messageInput.value.trim()

    const fields = [nameInput, emailInput, subjectInput, messageInput]
    let hasError = false

    fields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('input-error')
            hasError = true
        } else {
            field.classList.remove('input-error')
        }
    })

    if (hasError) {
        errorMsg.style.color = 'red'
        errorMsg.textContent = 'Please fill in all fields.'
        resetButton()
        loading = false
        return
    } else {
        errorMsg.textContent = ''
    }

    const data = {
        service_id: 'service_qu8irua',
        template_id: 'template_xfv7exi',
        user_id: 'wtCRfUdNsnRwRkqjy',
        template_params: {
            user_name: name,
            user_email: email,
            subject: subject,
            message: message
        }
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                BUTTON.innerHTML = 'Sent!'
                form.reset()
                errorMsg.style.color = 'green'
                errorMsg.textContent = 'Your message has been sent successfully!'
            } else {
                throw new Error('Failed to send email')
            }
        })
        .catch(() => {
            errorMsg.style.color = 'red'
            errorMsg.textContent = 'Something went wrong. Please try again.'
        })
        .finally(() => {
            setTimeout(() => {
                resetButton()
                errorMsg.textContent = ''
                errorMsg.style.color = 'red'
                loading = false
            }, 5000)
        })
})

function resetButton() {
    BUTTON.innerHTML = `Send Message <i class="fas fa-paper-plane"></i>`
}