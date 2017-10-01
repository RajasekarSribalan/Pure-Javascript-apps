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


  if (!validateform(siteName, siteURL)) {
    return false;
  }
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


function validateform(siteName, siteURL) {
  if (!siteName || !siteURL) {
    alert('please fill all details...');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteURL.match(regex)) {
    alert('please use valid url...');
    return false;
  }

  return true;
}
