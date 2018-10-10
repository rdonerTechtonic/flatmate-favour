$(document).ready(init);

function init() {

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
    },
    done: {
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

  //eventually testHousehold will be dynamically replaced depending on user login
  window.testHousehold = new flatMateFavour();
  console.log('init runs');

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
    eventStatus: status.accepted.icon.src,
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
    eventStatus: "pending",
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
    eventStatus: "done",
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
    eventStatus: "thanked",
    eventPostedBy: "ryan"
  })
  console.log("Test Event Data Loaded");
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

//  Function to [description here]
//  flatMateFavour.prototype.methodName = function () {
//
// };


// Library.prototype.saveLibrary = function() {
// //turn the bookShelf into a string, the save it to localStorage as "library"
//   localStorage.setItem("library", JSON.stringify(this.bookShelf));
// }



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





//Test code to create a new house, uncomment and run in console.
// new House (
// {
//   HouseName:  "testHouseName",
//   HouseOwner: "owner@gmail.com",
//   HouseRoomates:  ["roommate1@gmail.com", "roommate2@gmail.com"]
// }
// )

//Test code to create 4 new events, uncomment and run in console.
// testHousehold.ffEvents[0] = new Event(
// {
//   eventTitle: "testTitle0",
//   eventLocation: "testLocation0",
//   eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
//   eventNotes: "testNotes0",
//   eventStartDate: "2018-10-09T21:04:47.678Z",
//   eventEndDate: "2018-10-09T23:04:47.678Z",
//   eventStatus: status.thanked,
//   eventPostedBy: "devin"
// })
//
// testHousehold.ffEvents[1] = new Event(
// {
//   eventTitle: "testTitle1",
//   eventLocation: "testLocation1",
//   eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
//   eventNotes: "testNotes1",
//   eventStartDate: "2018-10-10T21:04:47.678Z",
//   eventEndDate: "2018-10-10T22:04:47.678Z",
//   eventStatus: "pending",
//   eventPostedBy: "ryan"
// })
//
//
// testHousehold.ffEvents[2] = new Event(
// {
//   eventTitle: "testTitle2",
//   eventLocation: "testLocation2",
//   eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
//   eventNotes: "testNotes2",
//   eventStartDate: "2018-10-11T19:04:47.678Z",
//   eventEndDate: "2018-10-11T21:04:47.678Z",
//   eventStatus: "done",
//   eventPostedBy: "ryan"
// })
//
// testHousehold.ffEvents[3] = new Event(
// {
//   eventTitle: "testTitle3",
//   eventLocation: "testLocation3",
//   eventRoommates: ["testEmail1@gmail.com, testEmail2@gmail.com"],
//   eventNotes: "testNotes3",
//   eventStartDate: "2018-10-12T18:04:47.678Z",
//   eventEndDate: "2018-10-12T23:04:47.678Z",
//   eventStatus: "thanked",
//   eventPostedBy: "ryan"
// })
