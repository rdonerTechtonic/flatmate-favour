flatMateFavour.prototype.updateHouseName = function() {
  var newHouseName = $("#houseName").val();
  window.testHousehold.ffHouse.HouseName = newHouseName;
};


flatMateFavour.prototype.updateRoommateName = function() {
  var newHouseRoommates = $("#inviteRoommate").val();
  window.testHousehold.ffHouse.HouseRoomates.push(newHouseRoommates);
};

flatMateFavour.prototype.submitButton = function() {
  $("#inviteRoommateButton").click(function(event) {
    event.prevent.Default();
    updateRoommateName();
    updateRoommateSelector();
  });
};