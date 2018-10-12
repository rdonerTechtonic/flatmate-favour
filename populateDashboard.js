flatMateFavour.prototype.getEvents = function() {
  for (var i = 0; i < this.ffEvents.length; i++) {
    var splitStartDate = this.ffEvents[i].eventStartDate.split('T');
    var splitStartTime = splitStartDate[1].split('.');
    var splitEndDate = this.ffEvents[i].eventEndDate.split('T');
    var splitEndTime = splitStartDate[1].split('.');
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
              <button class="col-3 ml-auto changeStatus btn ' + this.ffEvents[i].eventStatus.button.class + '" type="button" name="button">\
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
                  '+ splitStartDate[0] +' <br />\
                  '+ splitStartTime[0] +'\
                </p>\
              </div>\
              <div>\
                <h2>End:</h2>\
                <p>\
                '+ splitEndDate[0] +' <br />\
                '+ splitEndTime[0] +'\
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
    testHousehold.addDashboardEventListeners();
  };
};

flatMateFavour.prototype.addDashboardEventListeners = function() {

  $('.changeStatus').each(function(i) {
    $(this).click(function(){
      switch(testHousehold.ffEvents[i].eventStatus.status){
        case "pending":
          console.log('status is pending. moving to accepted');
          testHousehold.ffEvents[i].eventStatus = currentStatus.accepted;
        break

        case "accepted":
          console.log('status is accepted. moving to done');
          testHousehold.ffEvents[i].eventStatus = currentStatus.done;
        break

        case "done":
          console.log('status is done. moving to thanked');
          testHousehold.ffEvents[i].eventStatus = currentStatus.thanked;
        break
      }
      $('#accordion').empty();
      testHousehold.getEvents();
      // testHousehold.ffEvents[i].eventStatus = currentStatus.done;
      // console.log(i);
      // console.log(testHousehold.ffEvents[i].eventStatus);
    // console.log("you clicked on the done button");
    // if(this.ffEvents[0].eventStatus.status === "done") {
    //   console.log("you clicked on the done button");
    // } else{


      // console.log($(this).parent().children()[0])
    // testHousehold.ffEvents[0].eventStatus = currentStatus.done;
    // // this.class;
    // // console.log(testHousehold.ffEvents[0].eventStatus);
    // // console.log(this);
    // // console.log(this);
    // $(this).toggleClass('btn-warning');
    // $(this).addClass('btn-success');
    });
  });
}
