$(document).ready(filter);

function filter () {
  $("div.dashboardUsers > button").on('click', function filterDashboardEventByRoommate() {
    $('#accordion').children().remove();
    var filteredEvents = [];
    console.log(filteredEvents);
    var buttonID = $("div.dashboardUsers > button").attr('id');
    for (var i = 0; i < testHousehold.ffEvents.length; i++) {
      if(buttonID == testHousehold.ffEvents[i].eventPostedBy) {
        filteredEvents.push(testHousehold.ffEvents[i]);
      };
    };
    $('#accordion').append(filteredEvents);
  });
};
