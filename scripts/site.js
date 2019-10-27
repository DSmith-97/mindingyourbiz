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

$("#getEmail").on("click", function() {
  accessDataStore("getEmailAddressList");
});

$(".sendContact").on("click", function() {
  accessDataStore("addNewContact");
});

$(".subscribeSubmit").on("click", function() {
  accessDataStore("addSubscriberEmail");
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

function updateDataStore(updatedDataStore) {
  $.ajax({
    url:"https://api.myjson.com/bins/7i1p8",
    type:"PUT",
    data: JSON.stringify(updatedDataStore),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
		// alert(textStatus);
    }
});
}

function accessDataStore(action) {
  var subscriberEmailList;
  var data;
  var index = 1;
  $.ajax({
    url: "https://api.myjson.com/bins/7i1p8",
    method: "Get",
    success: function(dataStore){
      data = dataStore;
    },
    complete: function() {
        performDataAction(data, action);
    }
  });
}

function performDataAction(data, action, newData) {
  switch (action) {
    case "getEmailAddressList":
      getEmailAddressList(data);
      break;
    case "addNewContact":
      addNewContact(data);
      break;
    case "addSubscriberEmail":
      addSubscriberEmail(data);
      break;
    default:
  }
}

// admin function
function getEmailAddressList(data) {
  var emailList = data.subscriberList;
}

function addNewContact(data) {
  var contactList = data.contactList;

  var contactName = $("input[name='Name']").val();
  var contactEmail = $("input[name='Email']").val();
  var contactMessage = $("input[name='Message']").val();

  var newContact = {
    name: contactName,
    email: contactEmail,
    message: contactEmail
  };

  var contactSectionIsValid = function() {

    if ( contactName != "" && contactEmail != "" && contactEmail != "" ) {
      return true;
    } else {
      return false;
    }
  }

  if (contactSectionIsValid()) {
    contactList.push(newContact);

    // save updatedDataStore
    updateDataStore(data);

    var contactName = $("input[name='Name']").val("");
    var contactEmail = $("input[name='Email']").val("");
    var contactMessage = $("input[name='Message']").val("");

    // clean up alerts
    $(".success-alert").show();
    $(".success-alert").fadeOut(5000);
  }

}

function addSubscriberEmail(data) {
  // extract emmail array
  var emailList = data.subscriberList;

  // add new email to array list
  var newEmailAddress = $(".newEmailSubscriber").val().trim();

  if (newEmailAddress != "" && newEmailAddress.indexOf("@") > -1) {
      emailList.push(newEmailAddress);
      var newEmailList = emailList;
      // add email array back to dataStore object
      data.subscriberList = newEmailList;

      // save updateDataStore
      updateDataStore(data);

      // hide subscriber modal content and show thank you
      $(".beforeSub").hide();
      $(".subscribeSubmit").hide();
      $(".afterSub").fadeIn();

      setTimeout(function(){
        // clear out previous entry
        $(".newEmailSubscriber").val("");

        // reset modal elements
        document.getElementById('subscribe').style.display='none';
        $(".beforeSub").show();
        $(".subscribeSubmit").show();
        $(".afterSub").hide();
      }, 2000);
  } else {
    alert("Please enter a valid email address");
  }
}







//---//
