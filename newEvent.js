

function grabNewEventData() {

var newEventTitle = $('#eventTitle').val();
var newEventLocation = $('#eventLocation').val();
var newEventRoommates = [""]
for (var i = 0; i < $('#selectRoommate option:selected').length; i++) {
  newEventRoommates[i] = $('#selectRoommate option:selected')[i].value;
}
var newEventNotes = $('#eventNotes').val()
//not working yet, placeholder date/time
var newEventStartDate = "2018-9-09T23:04:47.678Z"
//not working yet, placeholder date/time
var newEventEndDate = "2018-11-09T23:04:47.678Z"
var newEventStatus = "unaccepted"
var newEventPostedBy = "repalce me with argument from calling function"

var newEvent = new Event({
  eventTitle: newEventTitle,
  eventLocation: newEventLocation,
  eventRoommates: newEventRoommates,
  eventNotes: newEventNotes,
  eventStartDate: newEventStartDate,
  eventEndDate: newEventEndDate,
  eventStatus: newEventStatus,
  eventPostedBy: newEventPostedBy
})
return newEvent;
};
