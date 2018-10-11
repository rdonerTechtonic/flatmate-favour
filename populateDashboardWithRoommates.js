$(document).ready(populateDashboardWithRoommates);

function populateDashboardWithRoommates () {
  for (var i = 0; i < testHousehold.ffHouse.HouseRoomates.length; i++) {
    var splitRoommateName = testHousehold.ffHouse.HouseRoomates[i].split("@");
    var readableRoommateName = splitRoommateName[0];
    $('div.dashboardUsers').append('<button id="' + readableRoommateName + '"<a href="#"><i class="fas fa-user"></i></a></button>');
  };
};
