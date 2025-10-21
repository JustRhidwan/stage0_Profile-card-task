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
const fullname = document.querySelector('.name');
const nameError = document.querySelector('#name-error')
const email = document.querySelector('.email');
const emailError = document.querySelector('#email-error');
const subject = document.querySelector('.subject');
const subjectError = document.querySelector('#subject-error');
const message = document.querySelector('.message');
const messageError = document.querySelector('#message-error');
const submit = document.querySelector('button');
const successMessage = document.getElementById('success-message')

fullname.addEventListener("input", (event) => {
    if(fullname.validity.valid) {
        nameError.textContent = "";
        nameError.className = "error";
    }else {
        showError();
    }
})

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the active class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // prevent actual form submission so we can show the success UI client-side
  event.preventDefault();

  // validate all fields
  const isNameValid = fullname.validity.valid;
  const isEmailValid = email.validity.valid;
  const isSubjectValid = subject.validity.valid;
  const isMessageValid = message.validity.valid;

  if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
    // show appropriate errors
    showError();
    return;
  }

  // all fields valid -> show success
  showSuccess();
});


function showError() {
  if (fullname.validity.valueMissing) {
    // If empty
    nameError.textContent = "You need to enter your Fullname.";
  } 
  // Add the active class
  nameError.className = "error active";

   if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the active class
  emailError.className = "error active";

 if (subject.validity.valueMissing) {
    // If empty
    subjectError.textContent = "You need to enter a subject.";
  } 
  // Add the active class
  subjectError.className = "error active";

   if (message.validity.valueMissing) {
    // If empty
    messageError.textContent = "You need to enter a message.";

  } else if (message.validity.tooShort) {
    // If the value is too short,
    messageError.textContent = `Message should be at least ${message.minLength} characters; you entered ${message.value.length}.`;
  }
  // Add the active class
  messageError.className = "error active";
}

// Add this helper to display a success message, clear errors and reset the form
function showSuccess() {
  if (!successMessage) return;

  // set visible success text (adjust class names to match your CSS)
  successMessage.textContent = "Message sent successfully!";
  successMessage.className = "success active";

  // clear any visible field errors
  nameError.textContent = "";
  nameError.className = "error";
  emailError.textContent = "";
  emailError.className = "error";
  subjectError.textContent = "";
  subjectError.className = "error";
  messageError.textContent = "";
  messageError.className = "error";

  // reset the form fields
  form.reset();

  // hide the success message after 5 seconds
  setTimeout(() => {
    successMessage.textContent = "";
    successMessage.className = "";
  }, 5000);
}