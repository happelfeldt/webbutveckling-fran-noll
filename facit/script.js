// Find the button and the paragraph by their IDs.
const knapp = document.querySelector('#hejKnapp');
const svar = document.querySelector('#svar');

// Show a message when the button is clicked.
knapp.addEventListener('click', () => {
  svar.textContent = 'Det fungerar!';
});
