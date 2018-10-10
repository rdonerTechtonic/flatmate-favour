flatMateFavour.prototype.getEvents = function() {
  for (var i = 0; i < this.ffEvents.length; i++) {
  //   this.ffDashboard.push(this.ffEvents[i]);
  //   // console.log(this.ffEvents[i]);
  // }
  // this.ffEvents[0];
  // console.log(this.ffDashboard);
var status = {
  accepted: {
    icon: {
      src: "Image-Sources/Hourglass-Icon.png",
      alt: "hourglass icon"
    },
    button: {
      class: "btn-warning",
      text: "Done?"
    }
  },
  pending: {
    icon: {
      src: "Image-Sources/Handshake-Icon.png",
      alt: "handshake icon"
      },
    button: {
      class: "btn-danger",
      text: "Accept"
    }
  }
  done: {
    icon: {
        src: "Image-Sources/Check-Icon.png",
        alt: "check-icon"
      },
    button: {
      class: "btn-success button-complete",
      text: "Thanks"
    }
  }
  thanked: {
    icon: {
        src: "Image-Sources/Check-Icon.png",
        alt: "check-icon"
      },
    button: {
      class: "btn-success button-complete",
      text: "Thanked!"
    }
  }
}
  // var newCard = "<div class='card' id='newCard'></div>"
  // $.each(this.ffEvents, function(i, value) {
    var newCard ='\
      <div class="card">\
        <div class="card-header task-accepted" id="headingTwo">\
          <div class="row">\
            <div class="col-2 status">\
              <img src="Image-Sources/Handshake-Icon.png" alt="flatmate favour icon" class="header-icon">\
          </div>\
              <button class="col-6 collapsed alert alert-danger status" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseTwo" id="item1">\
            '+ this.ffEvents[i].eventTitle + '\
          </button>\
              <button class="col-3 ml-auto btn btn-danger' + ffEvents[i].status[i] + '" type="button" name="button">\
            Accept\
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
