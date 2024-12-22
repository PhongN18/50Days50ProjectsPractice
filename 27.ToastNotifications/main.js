const btn = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const message = ['Message One', 'Message Two', 'Message Three', 'Message Four', 'Message Five']
const type = ['info', 'success', 'warning', 'error']

btn.addEventListener('click', () => createNoti())

function createNoti() {
    const toast = document.createElement('div')
    toast.classList.add('toast')

    const toastType = type[Math.floor(Math.random() * type.length)]

    toast.classList.add(toastType)
    toast.innerText = toastType + ': ' + message[Math.floor(Math.random() * message.length)]
    toasts.appendChild(toast)


    setTimeout(() => toasts.removeChild(toast), 5000)
}