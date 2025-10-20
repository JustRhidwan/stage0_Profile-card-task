
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

updateTime();

//  Continuous updates: Update the time every 1000 milliseconds (1 second)
setInterval(updateTime, 1000); 

const form = document.querySelector('form');
const fullname = document.querySelector('.name').value.trim;
const email = document.querySelector('.email');
const emailError = document.querySelector('#email-error');
const subject = document.querySelector('.subject');
const submit = document.querySelector('button');

email.addEventListener('input', (event)=> {
    if(email.validity.valid) {
        emailError.textContent="dff";
    } 
    else{

    }
})