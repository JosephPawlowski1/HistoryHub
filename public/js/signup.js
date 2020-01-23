// Sign up firebase auth
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  // get user information
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // signing up the users (some time delay to complete)
  firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal and reset the form 
    const modal = document.querySelector('#modal-signup');
    M.modal.getInstance(modal).close();
    signupForm.reset();
  });
});
