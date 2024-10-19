function init() {
  document
    .querySelector('.buttons')
    .addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    });
}

init();
