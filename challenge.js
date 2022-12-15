// 1. Given an array of strings, return only the strings that have exactly 4 characters.

var animals = ["badger", "emu", "elephant", "lion", "cat"]
    for(i=0; i < animals.length; i++) 
        if (animals[i].length === 4) {
        console.log(animals[i]);
        }