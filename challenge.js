// For each challenge you complete, include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**.

// 1. Given an array of strings, return only the strings that have exactly 4 characters.
//- create array of stings with variable letter counts
//-make if statement to print out words that are === 4 letters/characters
// if words.lengh === 4, print it out. 

var animals = ["badger", "emu", "elephant", "lion", "cat"]
    for(i=0; i < animals.length; i++) 
        if (animals[i].length === 4) {
        console.log(animals[i]);
        }
