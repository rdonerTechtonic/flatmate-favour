

$(document).ready(init);

function init() {

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

  //eventually testHousehold will be dynamically replaced depending on user login
  window.testHousehold = new flatMateFavour();
  console.log('init runs');



 // testHousehold.getEvents();
 // testHousehold.changeStatus();

  //Load saved local storage, if not found, load some blank data to prevent errors.
  if (localStorage.getItem("savedData")) {
    testHousehold.loadData();
  } else {
    testHousehold.initData();
  }
  testHousehold.updateRoommateSelector();
}





function flatMateFavour() {
  this.ffEvents = new Array();
  this.ffHouse = new Object();
  this.ffDashboard = new Array();
};

function Event(obj) {
  this.eventTitle = obj.eventTitle;
  this.eventLocation = obj.eventLocation;
  this.eventRoommates = obj.eventRoommates;
  this.eventNotes = obj.eventNotes;
  this.eventStartDate = obj.eventStartDate;
  this.eventEndDate = obj.eventEndDate;
  this.eventStatus = obj.eventStatus;
  this.eventPostedBy = obj.eventPostedBy;
}

function House(obj) {
  this.HouseName = obj.HouseName;
  this.HouseRoomates = obj.HouseRoomates;
}

flatMateFavour.prototype.updateRoommateSelector = function () {
  $('#selectRoommate').children().remove();
  for (var i = 0; i < testHousehold.ffHouse.HouseRoomates.length; i++) {
    var roommateSelect = testHousehold.ffHouse.HouseRoomates[i];
      var appendString = '<option value="' + i + '">' + testHousehold.ffHouse.HouseRoomates[i] + '</option>'
      $('#selectRoommate').append(appendString);
  }
}


//Functions Related to dashboard.html
$("#createEventObject").click(function() {
  window.location = 'event.html';
});

//Functions Related to household.html


//Functions Related to event.html page
$("#submitEventButton").click(function() {
  var newEvent
  newEvent = testHousehold.grabNewEventData();
  testHousehold.ffEvents.push(newEvent);
  testHousehold.saveData();
  window.location = 'dashboard.html';
});

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
  var newEventStatus = status.pending;
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

//Functions related to saving/loaded/clearing/test data

flatMateFavour.prototype.initData = function(){
  window.testHousehold.ffHouse = new House (
    {
      HouseName:  "",
      HouseOwner: "",
      HouseRoomates:  [""]
    }
  )
  window.testHousehold.ffEvents[0] = new Event(
  {
  eventTitle: "",
  eventLocation: "",
  eventRoommates: [""],
  eventNotes: "",
  eventStartDate: "",
  eventEndDate: "",
  eventStatus: status.pending,
  eventPostedBy: ""
  })
}

flatMateFavour.prototype.clearData = function(){
  this.ffDashboard = [];
  this.ffEvents = [];
  this.ffHouse = {};
}

flatMateFavour.prototype.saveData = function() {
  localStorage.setItem("savedData", JSON.stringify(this));
};

flatMateFavour.prototype.loadData = function () {
  var loadedData = new Object();
  var loadedData = JSON.parse(localStorage.getItem("savedData"));
  this.ffDashboard = loadedData.ffDashboard;
  this.ffEvents = loadedData.ffEvents;
  this.ffHouse = loadedData.ffHouse;
}

flatMateFavour.prototype.createTestData = function () {
  window.testHousehold.ffHouse = new House (
    {
      HouseName:  "testHouseName",
      HouseOwner: "owner@gmail.com",
      HouseRoomates:  ["roommate1@gmail.com", "roommate2@gmail.com"]
    }
  )
  console.log("Test House Data Loaded");
  window.testHousehold.ffEvents[0] = new Event(
  {
  eventTitle: "testTitle0",
  eventLocation: "testLocation0",
  eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
  eventNotes: "testNotes0",
  eventStartDate: "2018-10-09T21:04:47.678Z",
  eventEndDate: "2018-10-09T23:04:47.678Z",
  // eventStatus: status.accepted,
  eventStatus: status.accepted,
  eventPostedBy: "devin"
  })
  console.log("Test Event Data Loaded");
  window.testHousehold.ffEvents[1] = new Event(
    {
      eventTitle: "testTitle1",
      eventLocation: "testLocation1",
      eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
      eventNotes: "testNotes1",
      eventStartDate: "2018-10-10T21:04:47.678Z",
      eventEndDate: "2018-10-10T22:04:47.678Z",
      eventStatus: status.pending,
      eventPostedBy: "ryan"
    })
  console.log("Test Event Data Loaded");

  window.testHousehold.ffEvents[2] = new Event(
    {
    eventTitle: "testTitle2",
    eventLocation: "testLocation2",
    eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
    eventNotes: "testNotes2",
    eventStartDate: "2018-10-11T19:04:47.678Z",
    eventEndDate: "2018-10-11T21:04:47.678Z",
    eventStatus: status.done,
    eventPostedBy: "ryan"
  })
  console.log("Test Event Data Loaded");
  window.testHousehold.ffEvents[3] = new Event(
    {
    eventTitle: "testTitle3",
    eventLocation: "testLocation3",
    eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
    eventNotes: "testNotes3",
    eventStartDate: "2018-10-12T18:04:47.678Z",
    eventEndDate: "2018-10-12T23:04:47.678Z",
    eventStatus: status.thanked,
    eventPostedBy: "ryan"
  })
  console.log("Test Event Data Loaded");
}
//  Function to [description here]
//  flatMateFavour.prototype.methodName = function () {
//
// };



// flatMateFavour.prototype.getEvents = function() {
//     //request to local storage or DB and populate the dashboard
//     console.log('ffEvents runs');
//     if (localStorage.getItem("events")) {
//
//       var books = JSON.parse(localStorage.getItem("events"));
//       for (var i = 0; i < events.length; i++) {
//         // this.addBook(books[i]);
//         console.log('getting events');
//       }
//     }
//
//     flatMateFavour.prototype.saveEvents = function() {
//       //turn the bookShelf into a string, the save it to localStorage as "library"
//       localStorage.setItem("events", JSON.stringify("testSave"));
//     }
