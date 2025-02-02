console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log('Parts:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('Supply Changes:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log('Second item in Supply Changes:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedItem = supplyChanges.pop();
console.log('Removed item:', removedItem);
console.log('The Supply Changes array now:', supplyChanges); // 11 should be gone. but logged.

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
let addedItem = 25;
supplyChanges.push(25);
console.log('Added item:', addedItem);
console.log('The Supply Changes array now:', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for(i=0; i<supplyChanges.length; i++) {
    console.log(supplyChanges[i]);
    let x = supplyChanges[i];
    if(x > 0){
        console.log(`Added ${x} parts.`);
    }else if(x === 0){
        console.log('No change.');
    }else {
        console.log(`Removed ${x} parts.`)
    }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for(part of supplyChanges) {
    console.log(part);
    let x = part;
    if(x > 0){
        console.log(`Added ${x} parts.`);
    }else if(x === 0){
        console.log('No change.');
    }else{
        console.log(`Removed ${x} parts.`);
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
let sum = 0;
for( i=0; i<supplyChanges.length; i++) {
    sum += supplyChanges[i];
}
console.log('Total parts:', sum);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let boxes = 0;
let boxedParts = 0;
let unboxedParts = 572;
let leftoverParts = 0; //Possible remainder idea.
// while(boxedParts < unboxedParts) {
//     boxedParts = boxedParts + 7;
//     boxes = boxes + 1;
// }
// console.log('Full boxes:', boxes); // Should be 81 boxes. --> Giving me 82 because of remainder of parts.
// console.log('Boxed parts:', boxedParts); // 567 boxed parts, 5 remaining. --> Giving 574 due to the last loop.


//-------Attempt 2--------
// while(boxedParts < unboxedParts) {
//     // boxes = boxes + 1 still gives 82.
//     // leftoverParts = unboxedParts - (boxedParts * boxes); to find remainder
// }


//-------Attempt 3--------
// Should I create if statement to stop loop when boxed parts === unboxed parts?
// while(boxedParts < unboxedParts){
//     if(unboxedParts%7 === 0){ // If we ger a remainder of 0, add a count to boxes.
//         boxedParts = boxedParts + 7; // Prevent infinite loop. STILL GETTING INFINITE LOOP!!!
//         boxes = boxes + 1;
//     }else { // Once we have a remainder, assign it to leftoverParts
//         leftoverParts = unboxedParts;
//     }
// }
// console.log('Full boxes:', boxes) // Expecting 81.
// console.log('Leftover Parts:', leftoverParts); // Expecting 5.