

//POP UP MODAL ON INDEX
//assign a variable to the modal classfrom the home page
const homePopUp = document.querySelector('.homePopUp');
const closeButton = document.querySelector('.popUpClose');
const popUpSubmitButton = document.querySelector('#homePopUpButton');

//attaching modalClick event listener
const modalExitClick = () => {
  homePopUp.classList.add('homePopUpHidden');
};

  closeButton.addEventListener('click', modalExitClick);
  popUpSubmitButton.addEventListener('click', modalExitClick);
