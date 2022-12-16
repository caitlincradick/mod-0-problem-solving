// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**.

// Start with an array of travel destinations. 
// Print every travel destination in alphabetical order embedded 
// in a sentence using string interpolation. For example, 
// if the destination is "New York City", print something 
// like "The next place I want to visit is New York City!" 

//-get array of travel destinations that will print in alphabetical order 
//-print them in seperate sentences (still in alphabetical order)
//- output "The next place I will travel is __"

// //var cities
// for 
// sort()
// 'string interpolation ${travelDestinations[i]'}

var travelDestinations = ["Japan", "Cambiodia", "Brazil", "Ethiopia", "Fiji"]
for(i=0; i< travelDestinations.length; i++) {
    travelDestinations.sort();
    console.log(`The next place I will travel is ${travelDestinations[i]}`);  
}