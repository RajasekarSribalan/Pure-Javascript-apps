//Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);


//Fetch bookmarks
function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //Get output id


  var boookmarkresults = document.getElementById('boookmarkresults');

  boookmarkresults.innerHTML = '';

  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    boookmarkresults.innerHTML += '<div class="well">' +
      '<h3>' + name +
      '<a class="btn btn-default" target="_blank" href="' + url + '">Visit</a>' +
      '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a>'
    '</h3>' +
    '</div>';

  }
}

function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for (var i = 0; i < bookmarks.length; i++) {

    if (bookmarks[i].url == url) {
      bookmarks.splice(i, 1);
    }
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  fetchBookmarks();
}

function saveBookmark(e) {

  // Get form values

  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;

  var bookmark = {
    name: siteName,
    url: siteURL
  };

  //
  if (localStorage.getItem('bookmarks') === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  //Prevent form from submitting
  e.preventByDefault();
}
