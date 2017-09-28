//Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);


function saveBookmark(e) {
  console.log('Yipee!!!!');

  e.preventByDefault();
}
