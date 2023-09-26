// For SignUp:
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
  
  // get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#registration-container');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('guides').add({
    title: createForm.title.value,
    content: createForm.content.value
  }).then(() => {
    // close the create modal & reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
});