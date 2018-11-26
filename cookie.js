//Daniel Lee, Ching-Wei Lin, John Lorenz, Ryan Medick, Jomar Mullen, Tu Nguyen, Kevin Pham
//Group E
	var statePreservation = { // by default, the object's variables are initialized on declaration
	  heroName: "John Smith",
	  xCoord: 0,
	  yCoord: 0,
	  xMax: 25,
	  yMax: 25,
	  energy: 100,
	  whiffles: 100
	  // if adding additional data, be sure to initialize
	};
	var mapData = { // Data relevant to map save state
	  mapDimensions: 25,
	  fogSwitch: "on",
	  treeObstacle: 25,
	  boulderObstacle: 15,
	  blackberryObstacle: 35,
      bogObstacle: 25,
	  waterObstacle: 60,
	  treasureChest: 5,
	  mimicChest: 2,
	  jewels: 5,
	  bars: 5
	};

//var setExpiry = fetchAndPrintDate(setExpiry);
//readCookies(dataPtr, mapPtr); // Initially reads the cookies and sets the form to whatever

function defaultCookie(expiration){ // sets a default cookie
  document.cookie = 'frupalData=' + "John Smith" + "," + 0 + "," + 0 +
  "," + 25 + "," + 25 + "," + 100 + "," + 100 + "," +
  25 + "," + true + "," + 25 + "," +
  15 + "," + 40 + "," + 25 + "," + 60 + "," + 5 + "," + 2 + "," + 5 + "," +
  5 + '; expires=' + expiration.toGMTString() + '; path=/';
}


function getCookie(cname) { // string parsing
  var name = cname + "=";     // search for cookie variable with name argument passed in
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';'); // separate cookie data
  for(var i = 0; i <ca.length; i++) { // parse relevant cookie data into an array
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ""; // return array to callee
}

function readCookies(data, mapPtr){ // this function reads the cookie, splits the data, and stores it into memory
  var cookieData = getCookie("frupalData"); // name of cookie to search for
  if(cookieData){ // if there exists a cookie, then continue.
    var splitData = cookieData.split(','); // this separates the data, and stores each item into an array element
    data.heroName = splitData[0];
    data.xCoord = parseInt(splitData[1]);
    data.yCoord = parseInt(splitData[2]);
    data.xMax = parseInt(splitData[3]);
    data.yMax = parseInt(splitData[4]);
    data.energy = parseInt(splitData[5]);
    data.whiffles = parseInt(splitData[6]);
    mapPtr.mapDimensions = parseInt(splitData[7]);
    mapPtr.fogSwitch = splitData[8];
    mapPtr.treeObstacle = parseInt(splitData[9]);
    mapPtr.boulderObstacle = parseInt(splitData[10]);
    mapPtr.blackberryObstacle = parseInt(splitData[11]);
    mapPtr.bogObstacle = parseInt(splitData[12]);
    mapPtr.waterObstacle = parseInt(splitData[13]);
    mapPtr.treasureChest = parseInt(splitData[14]);
    mapPtr.mimicChest = parseInt(splitData[15]);
    mapPtr.jewels = parseInt(splitData[16]);
    mapPtr.bars = parseInt(splitData[17]);
    //loadSpecSheet(data, mapPtr); // puts cookie data into the settings form
  }
  //else{
    // do nothing, and default values will load instead.
  //}
  // If adding more object parameters, follow the above pattern. Use parseInt() //
  // to typecast string literals into integers.                                 //
}

function fetchAndPrintDate(currentDate){ // sets the expiration date for the cookie and returns it
  var date = new Date();
  var time = date.getTime();
  var expiry = time + (20000*36000);
  currentDate = (date.getMonth()+1) + '/' +date.getDate() + '/' + date.getFullYear();
  //document.write("The current date is: " + currentDate);
  //document.write(linebreak);
  date.setTime(expiry);
  date.toGMTString();
  //alert("The save session for this hero will expire on: " + date);
  //document.write(linebreak);
  //document.write(date.toGMTString());
//  document.write(linebreak);
  return date;
}
