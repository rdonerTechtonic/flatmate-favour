$(document).ready(populateDashboardWithRoommates);

function populateDashboardWithRoommates () {
  for (var i = 0; i < testHousehold.ffHouse.HouseRoomates.length; i++) {
    $('div.dashboardUsers').append('<button id="' + testHousehold.ffHouse.HouseRoomates[i] + '"<a href="#"><i class="fas fa-user"></i></a></button>');
  };
};
