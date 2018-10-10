//  Function that populates event edit form with event object
//I want to get the information from the specified event object
//I want to then take each value of each info object and populate the correct part of the form with the corresponding info object

//function that is called when button is pressed
//function that populates edit form with information

$(document).ready(autoFill);

function autoFill (eventToFillWith) {
  $('#eventTitle').val(eventToFillWith.eventTitle);
  $('#eventLocation').val(eventToFillWith.eventLocation);
  $('#eventNotes').val(eventToFillWith.eventNotes);

  var splitStartDate = eventToFillWith.eventStartDate.split('T');
  var splitEndDate = eventToFillWith.eventEndDate.split('T');

  var onlyStartDate = splitStartDate[0];
  var onlyEndDate = splitEndDate[0];

  var splitStartTime = splitStartDate[1].split('.');
  var splitEndTime = splitEndDate[1].split('.');

  var onlyStartTime = splitStartTime[0];
  var onlyEndTime = splitEndTime[0];

  $('#startEventDate').val(onlyStartDate);
  $('#startEventTime').val(onlyStartTime);
  $('#endEventDate').val(onlyEndDate);
  $('#endEventTime').val(onlyEndTime);
};

//test case:
// autoFill(testHousehold.ffEvents[1])
