flatMateFavour.prototype.getEvents = function() {
  for (var i = 0; i < this.ffEvents.length; i++) {

    var newCard ='\
      <div class="card">\
        <div class="card-header task-accepted" id="headingTwo">\
          <div class="row">\
            <div class="col-2 status">\
              <img src=' + this.ffEvents[i].eventStatus.icon.src + ' alt="' + this.ffEvents[i].eventStatus.icon.alt + '" class="header-icon">\
          </div>\
              <button class="col-6 collapsed alert status" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo" id="item1">\
            '+ this.ffEvents[i].eventTitle + '\
          </button>\
              <button class="col-3 ml-auto btn ' + this.ffEvents[i].eventStatus.button.class + '" type="button" name="button">\
            '+ this.ffEvents[i].eventStatus.button.text + '\
          </button>\
            </div>\
          </div>\
          <div id="collapseFour" class="collapse drop-down" aria-labelledby="headingTwo" data-parent="#accordion">\
            <div class="card-body">\
              <ul class="list-inline">\
                <h2>\
              Acceptor(s):\
            </h2>\
                <li class="list-inline-item">\
                  '+ this.ffEvents[i].eventRoommates[i] +'\
                </li>\
                <li class="list-inline-item">\
                  '+ this.ffEvents[i].eventRoommates[i] +'\
                </li>\
              </ul>\
              <div>\
                <h2>Requestor:</h2>\
                <p>\
                  '+ this.ffEvents[i].eventPostedBy +'\
                </p>\
              </div>\
              <div>\
                <h2>Begin:</h2>\
                <p>\
                  '+ this.ffEvents[i].eventStartDate +'\
                </p>\
              </div>\
              <div>\
                <h2>End:</h2>\
                <p>\
                '+ this.ffEvents[i].eventEndDate +'\
                </p>\
              </div>\
              <div>\
                <h2>Location:</h2>\
                <p>\
                  '+ this.ffEvents[i].eventLocation +'\
                </p>\
              </div>\
              <div>\
                <h2>Notes:</h2>\
                <p>\
                  '+ this.ffEvents[i].eventNotes +'\
                </p>\
              </div>\
              <a href="event.html" class="ml-auto btn btn-light" type="button" name="button">\
            Edit\
          </a>\
            </div>\
          </div>\
        </div>\
      '

    $('#accordion').append(newCard);
  };
};
