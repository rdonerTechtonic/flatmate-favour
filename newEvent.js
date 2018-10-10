flatMateFavour.prototype.grabNewEventData = function (eventPoster) {
  var newEventTitle = $('#eventTitle').val();
  var newEventLocation = $('#eventLocation').val();
  var newEventRoommates = [""]
  for (var i = 0; i < $('#selectRoommate option:selected').length; i++) {
    newEventRoommates[i] = $('#selectRoommate option:selected')[i].text;
  }
  var newEventNotes = $('#eventNotes').val()
  var newEventStartDate = $('#startEventDate').val() + "T" + $('#startEventTime').val() + ".000Z"
  var newEventEndDate = $('#endEventDate').val() + "T" + $('#endEventTime').val() + ".000Z"
  var newEventStatus = "unaccepted"
  var newEventPostedBy = eventPoster;

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
