var filteredResults = [];

function filterDashboardEventByRoommate () {
  $('div.dashboardUsers > button').on('click', function () {
    var filteredResults = [];
    for (var i = 0; i < testHousehold.ffHouse.HouseRoomates.length; i++) {
      for (var x = 0; x < testHousehold.ffEvents.length; x++) {
        if (testHousehold.ffHouse.HouseRoomates[i] === testHousehold.ffEvents[x].eventPostedBy){
          filteredResults.push(testHousehold.ffEvents[x])
        };
      };
    };
    $('#accordion').append('')
  });
};
