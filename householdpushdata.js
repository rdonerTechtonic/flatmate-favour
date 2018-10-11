flatMateFavour.prototype.updateHouseName = function() {
  var newHouseName = $("#houseName").val();
  window.testHousehold.ffHouse.HouseName = newHouseName;
};


flatMateFavour.prototype.updateRoommateName = function() {
  var newHouseRoommates = $("#inviteRoommate").val();
  window.testHousehold.ffHouse.HouseRoomates.push(newHouseRoommates);
};


$("#inviteRoommateButton").click(function(event) {
  // event.preventDefault();
  testHousehold.updateRoommateName();
  testHousehold.updateRoommateSelector();
});






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