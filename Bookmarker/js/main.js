//Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);


function saveBookmark(e) {

  // Get form values

  var siteName = document.getElementById('siteName').value;
  var siteURL = document.getElementById('siteURL').value;

  var bookmark = {
    name : siteName,
    url : siteURL
  };

  //
  if(localStorage.getItem('bookmarks') === null){
    var bookmarks = [];
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }

  //Prevent form from submitting
  e.preventByDefault();
}
