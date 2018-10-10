//  Function that populates event edit form with event object
//I want to get the information from the specified event object
//I want to then take each value of each info object and populate the correct part of the form with the corresponding info object

//function that is called when button is pressed
//function that populates edit form with information
function autoFill (eventToFillWith) {
  $('#eventTitle').val(eventToFillWith.eventTitle);
  $('#eventLocation').val(eventToFillWith.eventLocation);

  if(eventToFillWith.eventRoommates.length > 0) {
    for (var i = 0; i < eventToFillWith.eventRoommates.length; i++) {
    console.log('test select roommate thing');
      $('select#selectRoommate').append('<option>' + eventToFillWith.eventRoommates[i] + '</option>');
      $('#selectRoommate').val(eventToFillWith.eventRoommates);
    };
  };

  $('#eventNotes').val(eventToFillWith.eventNotes);

  return "form autofilled";
};
