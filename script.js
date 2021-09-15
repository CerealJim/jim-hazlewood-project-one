

//FORM SUBMISSION ERROR HANDLING (Contact & Blog page)

//assign a variable to the form element from the pages (blog and contact)
const formEl = document.querySelector('form');

const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formText = document.querySelector('#comment');

formEl.addEventListener('submit', function(e){
  if (formName.value == "") {
    alert("please fill in your name");
    e.preventDefault();
    console.log('name empty');
  } else if (formEmail.value == ""){
    alert("please fill in your email");
    e.preventDefault();
    console.log('email empty');
  } else if (formText.value == ""){
    alert("please fill in your comment or message");
    e.preventDefault();
    console.log('form text empty');
  } 
});


