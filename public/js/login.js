const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  try {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    document.location.replace('/dashboard');
  } catch (err) {
    console.error(err);
    alert('Failed to login');
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
