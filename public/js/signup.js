const signupFormHandler = async function(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const username = form.querySelector('#username-input-signup').value;
  const password = form.querySelector('#password-input-signup').value;

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
