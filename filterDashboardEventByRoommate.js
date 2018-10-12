$(document).ready(filter);

function filter () {
  $("span.dashboardUsers > button").on('click', function filterDashboardEventByRoommate(e) {
    var filteredEvents = [];
    var buttonID = $(e.target).attr('id');
    for (var i = 0; i < testHousehold.ffEvents.length; i++) {
      if(buttonID === testHousehold.ffEvents[i].eventPostedBy) {
        console.log(testHousehold.ffEvents[i]);
        filteredEvents.push(testHousehold.ffEvents[i])
      };
    };
    if (filteredEvents.length === 0) {
      alert("No events posted by this user!");
    }else {
      $('#accordion').children().remove();
      console.log(filteredEvents);
    };
  });
};
