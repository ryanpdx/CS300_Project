
// Frupal Game state-preserving file code // John Lorenz IV // CS300
// setCookie function accepts object called statePreservation.
var linebreak = "<br \>"
//vv CONSTANT DEFINITIONS vv
const DEFAULT_MAP_X = 0;
const DEFAULT_MAP_Y = 0;
const DEFAULT_HERO = "John Smith";
const MAX_MAP_X = 25;
const MAX_MAP_Y = 25;
const DEFAULT_ENERGY_BAR = 100;
const DEFAULT_WHIFFLES_COUNT = 1000;
//^^ CONSTANT DEFINITIONS ^^
var setExpiry;
var statePreservation = { // by default, the object's variables are initialized on declaration
  heroName: DEFAULT_HERO,
  xCoord: DEFAULT_MAP_X,
  yCoord: DEFAULT_MAP_Y,
  xMax: MAX_MAP_X,
  yMax: MAX_MAP_Y,
  energy: DEFAULT_ENERGY_BAR,
  whiffles: DEFAULT_WHIFFLES_COUNT
  // another object at some point may be added in the future that will
  // contain the coordinate locations of obstacles, jewels, and clues
  // if adding additional data, be sure to add const default values.
};

// FUNCTION CALLS //
readCookies(statePreservation); //<-- retrieves current data in cookie, and reads into the object
setExpiry = fetchAndPrintDate(setExpiry); // <-- grabs, date, and sets expiration for cookies
testModify(statePreservation); //objects seems to be passed by reference by default?
setCookie(statePreservation, setExpiry); //<-- stores current data values into a cookie
dataEcho(statePreservation); // <--- prints data from object
// FUNCTION CALLS //

// FUNCTION DEFINITIONS BELOW THIS POINT //
function testModify(data){ // must be passed a statePreservation object
  data.heroName = "test";
  data.xCoord = 15;
  data.yCoord = 14;
  data.xMax = 50;
  data.yMax = 50;
  data.energy = 29;
  data.whiffles = 753;
  // function is simply to test that data is updated
}
function setHeroName(){ // unused testing function
  var name;
  name = prompt("What is the name of your Frupal hero?");
  return name;
}
function fetchAndPrintDate(currentDate){ // sets the expiration date for the cookie and returns it
  var date = new Date();
  var time = date.getTime();
  var expiry = time + (20000*36000);
  currentDate = (date.getMonth()+1) + '/' +date.getDate() + '/' + date.getFullYear();
  document.write("The current date is: " + currentDate);
  document.write(linebreak);
  date.setTime(expiry);
  document.write("The save session for this hero will expire on: ");
  document.write(linebreak);
  document.write(date.toGMTString());
  document.write(linebreak);
  return date;
}
function setCookie(data, expiration){ // this sets the cookie to a saved state upon function call
  document.cookie = 'frupalData=' + data.heroName + "," + data.xCoord + "," + data.yCoord +
  "," + data.xMax + "," + data.yMax + "," + data.energy + "," + data.whiffles +
   '; expires=' + expiration.toGMTString() + '; path=/';
   // follow the existing pattern if adding more storeable data.
}
function deleteCookie(name){
  //not yet implemented, as not needed
}
function fileUpload(){
  //currently just using cookie functionality
  // for file upload functionality, follow the order of the setCookie() function, and
  // separate the data with commas. ie. heroName,xCoord,yCoord, etc .. .
}
// source: https://www.sitepoint.com/community/t/how-to-read-the-cookie-value-in-javascript/281426/4
// function accepts name parameter, and uses document.cookie to assign the object to a variables
// then splits the object string, performs string manipulation, and returns resulting string based on name
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function readCookies(data){ // this function reads the cookie, splits the data, and stores it into memory
  var cookieData = getCookie("frupalData");
  var splitData = cookieData.split(','); // this separates the data, and stores each item into an array element
  data.heroName = cookieData[0];
  data.xCoord = parseInt(cookieData[1]);
  data.yCoord = parseInt(cookieData[2]);
  data.xMax = parseInt(cookieData[3]);
  data.yMax = parseInt(cookieData[4]);
  data.energy = parseInt(cookieData[5]);
  data.whiffles = parseInt(cookieData[6]);
  // If adding more object parameters, follow the above pattern. Use parseInt() //
  // to typecast string literals into integers.                                 //
}
//testing function
function dataEcho(data){ //expects object statePreservation
  document.write(data.heroName + " ");
  document.write(data.xCoord + " ");
  document.write(data.yCoord + " ");
  document.write(data.xMax + " ");
  document.write(data.yMax + " ");
  document.write(data.energy + " ");
  document.write(data.whiffles + " ");
  document.write(linebreak);
}
