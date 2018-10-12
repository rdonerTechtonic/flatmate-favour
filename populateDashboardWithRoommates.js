$(document).ready(populateDashboardWithRoommates);

function populateDashboardWithRoommates () {
  for (var i = 0; i < testHousehold.ffHouse.HouseRoomates.length; i++) {
    $('span.dashboardUsers').append('<button class="btn btn-info" id="' + testHousehold.ffHouse.HouseRoomates[i] + '"<a href="#"><i class="fas fa-user"></i></a></button>');
    // console.log(testHousehold.ffHouse);
  };
};
