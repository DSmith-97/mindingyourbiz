// Script to open and close sidebar when on tablets and phones
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function showName(x) {
  var newSrc = x.children[0].src;
  $("#sample").modal("show");
  var newImage = "<img src='./images/markhotwaterpressure/mark_sample1.png' >";
  var nImg = "<img src='" + newSrc + "' >";
  $(".modal-body").empty();
  $(".modal-body").append(nImg);
  // $(".main_image").attr("src", newSrc);
  // imgElement.setAttribute("src", "ff")
  console.log("imgElement : " + newSrc);
}

$("#getData").on("click", function(){
  getDataStore("addEmailAddress");
});

// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off1", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off1";
}

function getDataStore(action) {
  var subscriberEmailList;
  var data;
  var index = 1;
  $.ajax({
    url: "https://api.myjson.com/bins/7i1p8",
    method: "Get",
    success: function(dataStore){
      data = dataStore;
      $("#output").val("");
      // populate text box with email address
      $("#output").val(data.subscriberList[index]);
      subscriberEmailList = data.subscriberList;
    },
    complete: function() {
        performDataAction(data, action);
    }
  });
}

function performDataAction(data, action) {
  if (action == "addEmailAddress") {
    getEmailAddressList(data);
  }
}

function getEmailAddressList(data) {
  // get dataStore object
  var emailList = data.subscriberList;
  console.log(emailList);
  // store email array to variable

  // add new array to variable

  // save email array back to dataStore

}

function addSubscriberEmil() {

}

function restoreDataStore() {
  $.ajax({
    url:"https://api.myjson.com/bins/1c5b64",
    type:"PUT",
    data:dataStore,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
		console.log(textStatus);
    }
});
}





//---//
