'use strict';

const handleInputUpdate = (event) => {
  const targetNode = event.target;
  const currValue = event.target.value;

  if (isInputEmpty(currValue)) {
    targetNode.classList.add('invalid');
  } else {
    if (targetNode.type === 'email') {
      if (isEmailValid(currValue)) {
        targetNode.classList.remove('invalid');
      } else {
        targetNode.classList.add('invalid');
      }
    }
  }
}

function isInputEmpty(inputValue) {
  return inputValue?.trim() === '';
}

function validate(elem,value) {
  if (isInputEmpty(value)) {
    elem.classList.add('invalid');
    return false;
  }

  elem.classList.remove('invalid');
  return true;
}

function isEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

(function validateContactForm() {
  const form = document.getElementById("subscription-form");

  form.addEventListener("submit",(e) => {
    e.preventDefault();

    submitForm(e);
  });
})();

function onApiCall(elem,add,remove,form) {
  elem.classList.remove(remove);
  elem.classList.add(add);
  form?.reset();
  setTimeout(() => {
    elem.classList.remove(add);
  },2000);
}

function submitForm(e) {
  const subsform = e.target;
  const formAction = subsform.querySelector('[type="submit"]');
  const { email } = subsform;

  const senderEmail = email.value;
  if (isInputEmpty(senderEmail)) {
    validate(email,senderEmail);
  }

  if (!isInputEmpty(senderEmail)) {
    const body = JSON.stringify({
      senderEmail,
    });

    const options = {
      method: "POST",
      mode: 'no-cors',
      body
    };

    formAction.classList.add('loading');
    formAction.disabled = true;
    fetch("https://isl8zti3ol.execute-api.us-west-2.amazonaws.com/default/triggerSubscription",options)
      .then(() => {
        onApiCall(email,'valid','invalid',e.target);
      })
      .catch(() => {
        onApiCall(email,'invalid','valid');
      }).finally(() => {
        formAction.classList.remove('loading');
        formAction.disabled = false;
      });
  }
}