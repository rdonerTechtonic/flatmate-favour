flatMateFavour.prototype.updateHouseName = function() {
  var newHouseName = $("#houseName").val();
  window.testHousehold.ffHouse.HouseName = newHouseName;
};


flatMateFavour.prototype.updateRoommateName = function() {
  var newHouseRoommates = $("#inviteRoommate").val();
  window.testHousehold.ffHouse.HouseRoomates.push(newHouseRoommates);
};

// flatMateFavour.prototype.getNewHouseData = function() {
//     var newHouseName = $("#houseName").val();
//     var newHouseRoommates = $('inviteRoommate').val();
//     var newEventRoommates = [""]
//     for (var i = 0; i < $('#selectRoommate option:selected').length; i++) {
//       newEventRoommates[i] = $('#selectRoommate option:selected')[i].text;
//
//       var newEvent = new Event({
//         eventTitle: newEventTitle,
//         eventLocation: newEventLocation,
//         eventRoommates: newEventRoommates,
//         eventNotes: newEventNotes,
//         eventStartDate: newEventStartDate,
//         eventEndDate: newEventEndDate,
//         eventStatus: newEventStatus,
//         eventPostedBy: newEventPostedBy
//       })
//       return newEvent;
//     };


// function clearFields() {
//   document.getElementById("houseName").value = ""
//   document.getElementById("inviteRoommate").value = ""
//   document.getElementById("selectRoommate").value = ""
// }


// $("#inviteRoommateButton").click(function(event) {
//   // event.preventDefault();
//   testHousehold.updateRoommateName();
//   testHousehold.updateRoommateSelector();
// });


// $("#cancelInformation").click(function(event) {
//   // event.preventDefault();
//   testHousehold.clearform();
// });

// document.getElementById("cancelInformation").reset();



// flatMateFavour.prototype.submitButton = function() {
//   // $("#inviteRoommateButton").click(function(event) {
//   //   event.prevent.Default();
//   //   updateRoommateName();
//   //   updateRoommateSelector();
//   $("#inviteRoommateButton").on("click", function(event) {
//     event.preventDefault();
//     console.log("button works");
//   });
// };