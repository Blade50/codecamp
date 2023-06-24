// Configuracion
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

function updateRecords(records, id, prop, value){
	
  if(prop !== "tracks" && value !== "") {
    //records[id][prop] = value;
    return 'dentro del 1 if';
  }
  
  if(prop === "tracks" && !records[id].hasOwnProperty('tracks')){
    //records[id][prop] = [value];
    return 'dentro del segundo ';
  }
}

console.log(updateRecords(recordCollection, 5439, "artis", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Tacke a Chance on Me"))
//console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));



