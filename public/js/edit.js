const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const title = form.querySelector('input[name="post-title"]').value;
  const body = form.querySelector('textarea[name="post-body"]').value;

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, body }),
    headers: { 'Content-Type': 'application/json' }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);
