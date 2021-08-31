const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const form = document.forms[0];
const alertMessages = document.querySelectorAll('.alert-messages')


inputs.forEach(input => input.addEventListener('click', handler))
form.addEventListener('submit', check)




function alertMessage(err) {
    err.classList.add('active')
    setTimeout(() => err.classList.remove('active'), 2000)
}






function check(e) {
    e.preventDefault()
    inputs.forEach(input => {
        if (input.value == '') {
            alertMessage(input.nextElementSibling)
        }
    })
}



function handler(e) {
    let current = e.target.previousElementSibling;
    let spans = current.querySelectorAll('span');
    labels.forEach(label => {
        if(label.nextElementSibling.value == '') {
            label.querySelectorAll('span').forEach(span => {
                span.classList.remove('active')
            })
        }
    })
    let curr = 1;
    spans.forEach(span => {
        span.style.transition = `${100 * curr++}ms`;
        span.classList.add('active');
    })
    
}



