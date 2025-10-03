// 1. You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique <id> as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

/*
The <updateRecords> function takes 4 arguments represented by the following function parameters:
  1. records - an object containing several individual albums
  2. id - a number representing a specific album in the records object
  3. prop - a string representing the name of the album’s property to update
  4. value - a string containing the information used to update the album’s property
*/

function updateRecords (records, id, prop, value) {
  for (let i = 0; i < records.length; i++) {
    if (records[i] === id && records[i].value != "" ) {
      self.prop = self.value;
    }
  }
  
// 2. If <value> is an empty string, delete the given <prop> property from the album.
  for (let i= 0; i < recordCollection.length; i++) {
    if (recordCollection[i] === id && recordCollection[i].value === "") {
      delete recordCollection[i].prop;
    }
  }
// 3. If <prop> isn't <["tracks"]> and <value> isn't an empty string, assign the <value> to that album's <prop>.
// if (prop != "tracks" && value != "") {prop = value}
  for (let i = 0; i < records.length; i++) {
    if (records[i] === id && records[i].value != "" && records[i].prop != "tracks") {
      self.prop = self.value;
    }
  }

// 4. If <prop> is <["tracks"]> and <value> isn't an empty string, but the album doesn't have a <["tracks"]> property, create an empty array and add <value> to it.
// if (prop === "["tracks"]" && value != ""; if (tracks === "-1") {add tracks: to properties and add []}
  for (let i = 0; i < records.length; i++) {
    if (records[i] === id && records[i].value != "" && records[i].prop === "tracks" && records[i].tracks === undefined) {
      records[i].tracks = [];
      records[i].tracks.push(value);
    }
  }

// 5. If prop is <["tracks"]> and <value> isn't an empty string, add <value> to the end of the album's existing <["tracks"]> array.
// if (prop === "tracks" && value != "") {add <value> to end of album <tracks>}
  for (let i = 0; i < records.length; i++) {
    if (records[i] === id && records[i].value != "" && records[i].prop === "tracks" && records[i].tracks != undefined) {
      records[i].tracks.push(value);
    }
  }

// 1. Your function must always return the entire <records> object.
  return records;
};

// Note: A copy of the recordCollection object is used for the tests. Your function should not directly refer to the recordCollection object, only the function parameter.
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
// updateRecords(recordCollection, 2548, 'artist', '');
// updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');
// updateRecords(recordCollection, 2468, 'tracks', 'Free');
// updateRecords(recordCollection, 2548, 'tracks', '');
console.log(recordCollection); 