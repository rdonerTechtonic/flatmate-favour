$(document).ready(filter);

function filter () {
  // $('div.dashboardUsers > button').on('click', function filterDashboardEventByRoommate () {
    var filteredEvents = [];
    $("div.dashboardUsers > button").each(function(){
      this.on('click', function filterDashboardEventByRoommate() {
        var filteredEvents = [];
    // for (var x = 0; x < testHousehold.ffEvents.length; x++) {
      // console.log(testHousehold.ffEvents[x].eventPostedBy);
      // var splitPostedBy = testHousehold.ffEvents[x].eventPostedBy.split("@");
      // var readablePostedBy = splitPostedBy[0];
      // console.log(splitPostedBy);

      // attr('id'));
      // console.log($("div.dashboardUsers button").attr('id'));
      // if (buttonPushedID === readablePostedBy){
      //   filteredEvents.push(testHousehold.ffEvents[x])
      // };
    // });
    // console.log(filteredEvents);
    // $('#accordion').append(filteredEvents);
    // console.log('filterDashboardEventByRoommate has been run');
  // };
});
}


//filter approach

// function checkForUserMatch (buttonID) {
//   for (var x = 0; x < testHousehold.ffEvents.length; x++) {
//     var splitPostedBy = testHousehold.ffEvents[x].eventPostedBy.split("@");
//     var readablePostedBy = splitPostedBy[0];
//     return buttonID === readablePostedBy;
//   };
// };
//
// function filterEvents () {
//
// };
