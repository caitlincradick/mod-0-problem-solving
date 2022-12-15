// // Given an array of strings, return only the words that begin with the letter "t"

// var names = ["Timothy", "Sandra", "Tom", "Jason", "Eric"]
// for(i=0; )

// return

// Start with an array of travel destinations. 
// Print every travel destination in alphabetical order embedded 
// in a sentence using string interpolation. For example, 
// if the destination is "New York City", print something 
// like "The next place I want to visit is New York City!" 

var travelDestinations = ["Japan", "Cambiodia", "Brazil", "Ethiopia", "Fiji"]
for(i=0; i< travelDestinations.length; i++) {
    travelDestinations.sort();
    console.log(`The next place I will travel is ${travelDestinations[i]}`);  
}