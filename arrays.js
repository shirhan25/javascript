/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

 stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

 /**
  * Q1.
  * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
  */
 //remove from the end of the array .pop and London Kings Cross .push

 stations.pop();
 stations.push("London Kings Cross");
//console.log(stations);
 
 
 
 /**
  * Q2.
  * It doesn't go as far as Dundee either, so remove it from the start of the array.
  */
 
 // remove from the start of the array .shift
 stations.shift();
//console.log(stations);
 
 
 
 /**
  * Q3.
  * How many stations are on the line?
  */
 
 // counting number of items in an array .length
 stationCount = stations.length;
 
// console.log("There are " + stationCount + " stations.");
 
 
 
 /**
  * Q4.
  * Which station is the third stop?
  */
 
//finding what is at the specific index. arrayName[index number]

 thirdStation = stations[2];
 
 //console.log("The third station is " + thirdStation);
 
 
 
 /**
  * Q5.
  * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
  */
 
//update an item in the array using splice (index to change the array,number elements to delete from the array from start, item to add)

stations.splice(1,1,"Berwick-upon-Tweed");
 //console.log(stations);
 
 
 
 /**
  * Q6.
  * How did Leeds get on there? Better remove it.
  */
 
//remove an item from a specific point in an array using .splice(index to start from, how many items from that index do you want to remove )
stations.splice(4,1);

 //console.log(stations);
 
 
 
 /**
  * Q7.
  * We forgot about Darlington! Add it to the route between Newcastle and York.
  */
 
//insert an item at a specific point in the array. .splice(index you want it to be, 0 items to delete, item to insert)

stations.splice(3,0,"Darlington");

//console.log(stations);
 
 
 
 /**
  * Q8.
  * Is Durham one of the stops?
  */
 
//find an item in the array 
// includes() method determines whether an array includes a certain value among
//returns true or false

stoppingAtDurham = stations.includes("Durham");
 
 console.log(stoppingAtDurham);
 
 
 /**
  * Q9.
  * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
  */




 if(stoppingAtDurham){
     console.log("Yay Durham!");
 } else {
     console.log("Aw...");
 }

