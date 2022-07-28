
const handleInputUpdate = (event) => {
  const targetNode = event.target;
  const currValue = event.target.value;

  if (isInputEmpty(currValue)) {

    targetNode.classList.add('invalid');
    targetNode.parentNode.classList.add('error');
    targetNode.nextElementSibling.textContent = `${targetNode.name} is required`;
  } else {

    targetNode.classList.remove('invalid');
    targetNode.parentNode.classList.remove('error');

    // validate email
    if (targetNode.type === 'email') {

      if (isEmailValid(currValue)) {

        targetNode.classList.remove('invalid');
        targetNode.parentNode.classList.remove('error');
      } else {

        targetNode.classList.add('invalid');
        targetNode.parentNode.classList.add('error');
        targetNode.nextElementSibling.textContent = 'Invalid email address';
      }
    }

    // validate mobile number
    if (targetNode.type === 'tel') {

      if (targetNode.value.match(/^\d{10}$/)) {

        targetNode.classList.remove('invalid');
        targetNode.parentNode.classList.remove('error');
      } else {

        targetNode.classList.add('invalid');
        targetNode.parentNode.classList.add('error');
        targetNode.nextElementSibling.textContent = 'Invalid mobile number';
      }
    }

    // validate website url
    if (targetNode.name === 'website') {

      if (targetNode.value.match(/^(?:https?:\/\/|s?ftps?:\/\/)?(?!www | www\.)[A-Za-z0-9_-]+\.+[A-Za-z0-9.\/%&=\?_:;-]+$/)) {

        targetNode.classList.remove('invalid');
        targetNode.parentNode.classList.remove('error');
      } else {

        targetNode.classList.add('invalid');
        targetNode.parentNode.classList.add('error');
        targetNode.nextElementSibling.textContent = 'Invalid website url';
      }
    }
  }
}

(function validateContactForm() {
  const form = document.getElementById("contact-us-form");

  form.addEventListener("submit",(e) => {
    e.preventDefault();

    submitForm(e);
  });
})();

function showMessage(message,type) {
  const messageElement = document.getElementById('form-submit-message');
  messageElement.className = '';
  messageElement.textContent = message;
  messageElement.classList.add(type);
  messageElement.style.display = 'block';
  setTimeout(() => {
    messageElement.style.display = 'none';
  },2000);
}

function submitForm(e) {
  const contactform = e.target;
  const formAction = contactform.querySelector('[type="submit"]');
  const { name,email,website,mobile,message } = contactform;

  const senderName = name.value;
  const senderEmail = email.value;
  const senderWebsite = website.value;
  const senderMobile = mobile.value;
  const senderMessage = message.value;

  if (isInputEmpty(senderName)) {
    validate(name,senderName);
  }
  if (isInputEmpty(senderEmail)) {
    validate(email,senderEmail);
  }
  if (isInputEmpty(senderMessage)) {
    validate(message,senderMessage);
  }

  if (!isInputEmpty(senderName) && !isInputEmpty(senderEmail) && !isInputEmpty(senderMessage)) {

    const body = JSON.stringify({
      senderName,
      senderEmail,
      senderWebsite,
      senderMobile,
      senderMessage,
    });

    const options = {
      method: "POST",
      mode: 'no-cors',
      body
    };

    formAction.classList.add('loading');
    formAction.disabled = true;
    fetch("https://1qlewft2ie.execute-api.us-west-2.amazonaws.com/default/triggerEmail",options)
      .then(() => {
        showMessage("Email Sent Successfully !!",'success');
        contactform.reset();
      })
      .catch((error) => {
        showMessage(error,'error');
      }).finally(() => {
        formAction.classList.remove('loading');
        formAction.disabled = false;
      });
  }
}

function isInputEmpty(inputValue) {
  return inputValue.trim() === '';
}

function validate(elem,value) {

  if (isInputEmpty(value)) {
    elem.classList.add('invalid');
    elem.parentNode.classList.add('error');
    return false;
  }

  elem.classList.remove('invalid');
  elem.parentNode.classList.remove('error');
  return true;
}

function isEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}