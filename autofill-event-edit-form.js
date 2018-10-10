//  Function that populates event edit form with event object
//I want to get the information from the specified event object
//I want to then take each value of each info object and populate the correct part of the form with the corresponding info object

//function that is called when button is pressed
//function that populates edit form with information

$(document).ready(updateRoommateSelector, autoFill);

function autoFill (eventToFillWith) {
  $('#eventTitle').val(eventToFillWith.eventTitle);
  $('#eventLocation').val(eventToFillWith.eventLocation);
  $('#eventNotes').val(eventToFillWith.eventNotes);

  var splitStartDate = eventToFillWith.eventStartDate.split('T');
  var splitEndDate = eventToFillWith.eventEndDate.split('T');
  console.log(splitStartDate);
  console.log(splitEndDate);

  var onlyStartDate = splitStartDate[0];
  var onlyEndDate = splitEndDate[0];
  console.log(onlyStartDate);
  console.log(onlyEndDate);

  var splitStartTime = splitStartDate[1].split('.');
  var splitEndTime = splitEndDate[1].split('.');
  console.log(splitStartTime);
  console.log(splitEndTime);

  var onlyStartTime = splitStartTime[0];
  var onlyEndTime = splitEndTime[0];
  console.log(onlyStartTime);
  console.log(onlyEndTime);

  $('#startEventDate').val(onlyStartDate);
  $('#startEventTime').val(onlyStartTime);
  $('#endEventDate').val(onlyEndDate);
  $('#endEventTime').val(onlyEndTime);

  return "form autofilled";
};

function updateRoommateSelector () {
  $('#selectRoommate').children().remove()
  for (var i = 0; i < testHousehold.ffHouse.HouseRoomates.length; i++) {
    var roommateSelect = testHousehold.ffHouse.HouseRoomates[i];
      var appendString = '<option value="' + i + '">' + testHousehold.ffHouse.HouseRoomates[i] + '</option>'
      $('#selectRoommate').append(appendString);
  };
};
