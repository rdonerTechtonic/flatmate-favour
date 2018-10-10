flatMateFavour.prototype.getEvents = function() {
  for (var i = 0; i < this.ffEvents.length; i++) {

    var newCard ='\
      <div class="card">\
        <div class="card-header task-accepted" id="heading'+ i +'">\
          <div class="row">\
            <div class="col-2 status">\
              <img src=' + this.ffEvents[i].eventStatus.icon.src + ' alt="' + this.ffEvents[i].eventStatus.icon.alt + '" class="header-icon">\
          </div>\
              <button class="col-6 collapsed alert status" data-toggle="collapse" data-target="#collapse'+ i +'" aria-expanded="false" aria-controls="collapse'+ i + '" id="item1">\
            '+ this.ffEvents[i].eventTitle + '\
          </button>\
              <button class="col-3 ml-auto btn ' + this.ffEvents[i].eventStatus.button.class + '" type="button" name="button">\
            '+ this.ffEvents[i].eventStatus.button.text + '\
          </button>\
            </div>\
          </div>\
          <div id="collapse'+ i +'" class="collapse drop-down" aria-labelledby="heading'+ i +'" data-parent="#accordion">\
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

flatMateFavour.prototype.changeStatus = function() {

  var status = {
    accepted: {
      status: "accepted",
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
      status: "pending",
      icon: {
        src: "Image-Sources/Handshake-Icon.png",
        alt: "handshake icon"
        },
      button: {
        class: "btn-danger",
        text: "Accept"
      }
    },
    done: {
      status: "done",
      icon: {
          src: "Image-Sources/Check-Icon.png",
          alt: "check-icon"
        },
      button: {
        class: "btn-success button-complete",
        text: "Thanks"
      }
    },
    thanked: {
      status: "thanked",
      icon: {
          src: "Image-Sources/Check-Icon.png",
          alt: "check-icon"
        },
      button: {
        class: "btn-secondary button-complete",
        text: "Thanked!"
      }
    }
  }

  // console.log(this.ffEvents[0].eventStatus.status);
  $(".btn-warning").click(function(){
    // console.log("you clicked on the done button");
    // if(this.ffEvents[0].eventStatus.status === "done") {
    //   console.log("you clicked on the done button");
    // } else{
    //   console.log("no work");
    testHousehold.ffEvents[0].eventStatus = status.done;
    this.class;
    // console.log(testHousehold.ffEvents[0].eventStatus);
    // console.log(this);
  })
}
