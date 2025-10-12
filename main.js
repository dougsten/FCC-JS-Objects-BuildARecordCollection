/* 1. You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique <id> as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information. */

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

/*
The <updateRecords> function takes 4 arguments represented by the following function parameters:
  1. records - an object containing several individual albums
  2. id - a number representing a specific album in the records object
  3. prop - a string representing the name of the album’s property to update
  4. value - a string containing the information used to update the album’s property
*/
/*

updateRecords(records,    id,         prop,         value)
              records	    id	        prop	        value	      action
                2.	      true	      true	        === “”	    delete prop
                3.	      true	      != “tracks”	  != “”	      prop = value
                4.	      Id[prop] 
                          === false	  “tracks” 	    != “”	      tracks[] === tracks[value]
                5.	      Id[prop] 
                          === true	  “tracks”      != “”	      tracks[1,2,…,”value”]
*/

function updateRecords(records, id, prop, value) {
  if (records[id][prop] !== "") {
    records[id][prop] = value;
    console.log(records[id][prop]);
  }
  
  /* 2. If <value> is an empty string, delete the given <prop> property from the album. */
  
  else if (records[id][prop] === "") {
    delete records[id][prop];
    console.log(records[id][prop]);
  }

  /* 3. If <prop> isn't <["tracks"]> and <value> isn't an empty string, assign the <value> to that album's <prop>... if (prop != "tracks" && value != "") {prop = value} */
    records[id][prop] = value;
    console.log(records[id][prop]);
  }

  /* 4. If <prop> is <["tracks"]> and <value> isn't an empty string, but the album doesn't have a <["tracks"]> property, create an empty array and add <value> to it.
  if (prop === "["tracks"]" && value != ""; if (tracks === "-1") {add tracks: to properties and add []} */
 /*  else if (prop === "tracks" && value != "" && !records[id].tracks === undefined) {
    records[id][prop] = [value];
    console.log(records[id]);
  } */

  /* 5. If prop is <["tracks"]> and <value> isn't an empty string, add <value> to the end of the album's existing <["tracks"]> array.
  if (prop === "tracks" && value != "") {add <value> to end of album <tracks>} 
  else if (?) {
    ?
  }

  /* 1. Your function must always return the entire <records> object. */
  return records;
}

/* Note: A copy of the recordCollection object is used for the tests. Your function should not directly refer to the recordCollection object, only the function parameter. */

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(updateRecords(recordCollection, 5439, "artist", ""));
updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
// updateRecords(recordCollection, 2548, 'artist', '');
// updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');
// updateRecords(recordCollection, 2468, 'tracks', 'Free');
// updateRecords(recordCollection, 2548, 'tracks', '');
// console.log(recordCollection);
