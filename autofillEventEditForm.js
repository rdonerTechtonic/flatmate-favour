
flatMateFavour.prototype.autoFill = function(eventToFillWith) {
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
