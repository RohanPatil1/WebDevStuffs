document.getElementById('myForm').addEventListener('submit',saveBookmark);

//Save our Bookmarks
function saveBookmark(e)
{
    //Get Form Values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(!validateForm(siteName,siteUrl)){
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    /*
    //Local Storage Demo
    localStorage.setItem('test','Hello World'); //('key','value')
    localStorage.getItem('test');
    localStorage.removeItem('test')
    */

    //Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        // init array
        var bookmarks = [];
        //Fill the array
        bookmarks.push(bookmark);
        //Set to LocalStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        
    }
    else{
        //Get bookmarks from LocalStrorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        //Put that to LocalStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
//So this if else will store our bookmarks array in the localStorage :)

    //Clear the form inputs after submit
    document.getElementById('myForm').reset();

    //Refetch bookmarks
    fetchBookmarks();

    e.preventDefault();// For avoiding the form to actually submit
}


//deleteBookmark fuction
function deleteBookmark(url)
{
    //GRAB-CHANGE-RESET Mechanism

      //Get bookmarks from LocalStorage
      var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));
      //Loop through bookmarks
      for(var i=0;i<bookmarks.length;i++){
          if(bookmarks[i].url == url)
          {
              //Remove From Array
              bookmarks.splice(i,1);
          }
      }
      //Reset back to localStrorage
      localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
      //Refetch bookmarks
      fetchBookmarks();
}

// To get the Previous history, we fetch out bookmarks onLoad of body
function fetchBookmarks()
{
    //Get bookmarks from LocalStorage
    var bookmarks= JSON.parse(localStorage.getItem('bookmarks'));

    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');

    //Build output
    bookmarksResults.innerHTML = "";
    for(var i=0;i< bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML +='<div class="well" >'+
                                    '<h3>'+name+
                                    '<a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> '
                                    + '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> '
                                    '</h3>'
                                    '</div>';

        
    }


}

function validateForm(siteName,siteUrl)
{
    //Validation--->
if(!siteName || !siteUrl)
{
    alert('Please Fill In The Form');
    return false;
}

var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

if(!siteUrl.match(regex)){
    alert("Please Use A Valid Url");
    return false;
}

return true;// means it passes!

//Validation <---
}



//JSON.stringify() ==> Converts into String
//JSON.parse() ==> Converts into JSON