$(document).ready(autoFillHouseholdForm);

function autoFillHouseholdForm (houseToFillWith) {
  $("houseName[type=text].tags").val(houseToFillWith.HouseName);
  $("inviteRoommate[type=text].tags").val(houseToFillWith.HouseRoomates);
};



// for (var i = 0; i < this.HouseRoomates.length; i++) {
//   this.HouseRoomates[i]. obj.HouseRoomates ==
// }

// testHousehold.prototype.editform = function() {
//
// };

// function House(obj) {
//   this.HouseName = obj.HouseName;
//   this.HouseRoomates = obj.HouseRoomates;
//   this.HouseOwner = obj.HouseOwner;
// }

// "Edited" portion - text must already be displayed
// and allow user to make changes
// look at text(), append()

// new House (
// {
//   HouseName:  "testHouseName",
//   HouseOwner: "owner@gmail.com",
//   HouseRoomates:  ["roommate1@gmail.com", "roommate2@gmail.com"]
// }
// );
