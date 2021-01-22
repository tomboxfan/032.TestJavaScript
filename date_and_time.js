// Copied from <2013 - A Smarter Way to Learn JavaScript> 31 chapter / 32 chapter

// Get current DateTime
var rightNow = new Date();
console.log(rightNow);

// Convert Date to String
var rightNowStr = rightNow.toString();
console.log(rightNowStr);

var theDay = rightNow.getDay(); //get a int [0,6]
console.log(theDay);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var theDayStr = dayNames[theDay];
console.log(theDayStr);

console.log(rightNow.getFullYear());
console.log(rightNow.getMonth()); // [0,11]
console.log(rightNow.getDay()); // [0,6]
console.log(rightNow.getDate()); // [1,31]
console.log(rightNow.getHours()); // [0,23]
console.log(rightNow.getMinutes()); // [0,59]
console.log(rightNow.getSeconds()); // [0,59]
console.log(rightNow.getMilliseconds()); // [0,999]
console.log(rightNow.getTime()); // Milliseconds since 1970.01.01


// Convert String to Date
var futureDay = new Date("June 30, 2045")
console.log(futureDay)
var futureDayTime = new Date("June 30, 2045 13:23:00")
console.log(futureDayTime)


function date_diff(date1Str, date2Str) {
  var date1 = new Date(date1Str);
  var date2 = new Date(date2Str);
  var date1MilliSeconds = date1.getTime();
  var date2MilliSeconds = date2.getTime();
  return date1MilliSeconds - date2MilliSeconds;
}

console.log(date_diff("Jan 01, 2021 12:23:01", "Jan 01, 2021 12:23:00")) // 1000
