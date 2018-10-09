$(document).ready(init);

function init() {
  //eventually testHousehold will be dynamically replaced depending on user login
  window.testHousehold = new flatMateFavour();
  console.log('init runs');
}

function flatMateFavour() {
  this.ffEvents = new Array();
  this.ffHouse = new Object();
};

function Event(obj) {
  this.eventTitle = obj.eventTitle;
  this.eventLocation = obj.eventLocation;
  this.eventRoommates = obj.eventRoommates;
  this.eventNotes = obj.eventNotes;
  this.eventStartDate = obj.eventStartDate;
  this.eventStartDate = obj.eventStartDate;
  this.eventEndDate = obj.eventEndDate;
  this.eventEndTime = obj.eventEndTime;
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

// {
// eventTitle: "testTitle"
// eventLocation: "testLocations"
// eventRoommates: ["testEmail1, testEmail2"]
// eventNotes: "testNotes"
// eventStartDate: {date object}
// eventStartTime: {time object}
// eventEndDate: {date object}
// eventEndTime: {time object}
// }
