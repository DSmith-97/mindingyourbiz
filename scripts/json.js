var dataStore = {
  "subscriberIndex": "0",
  "contactIndex" : "0",
  "subscriberList" : [
    "prof_derricksmith@yhoo.com",
    "babypiety@yahoo.com"
  ],
  "contactList" : [
    {
      "name" : "Derrick Smith",
      "email" : "testEmail1@email.com",
      "message" : "This is the first message"
    }
  ],
  "newBusinessList" : [
    {
      "businessOwnerName" : "Mr. Pibb",
      "businessOwnerContactNumber" : "555-222-2345",
      "businessOwnerContactEmail" : "biz@email.com",
      "businessName" : "business1",
      "businessType" : "pest control",
      "businessCity" : "palm bay",
      "businessState" : "Florida",
      "businessContactable" : "yes",
      "businessComment" : "some comment here",
      "active" : "yes"
    }
  ]
}


// save data store object to myjson
$.ajax({
    url:"https://api.myjson.com/bins/7i1p8",
    type:"PUT",
    data: JSON.stringify(dataStore),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
		console.log(textStatus);
    }
});
