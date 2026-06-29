const cookiebtn = document.querySelector('.cookies-button')
const toast = document.querySelector('.toast')
const container = document.querySelector('.container-hidden')

setTimeout(()=>{
        container.classList.remove('container-hidden')
        container.classList.add('container')
    }, 3000)

function RunCookie(toastmessage) {
    toast.textContent = toastmessage
    toast.classList.remove('toast-hidden')
    container.classList.toggle('container-hidden')

    setTimeout(()=>{
           toast.classList.add('toast-hidden')
    }, 3000)
}

