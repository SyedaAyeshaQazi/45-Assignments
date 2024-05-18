// 16. More Guests:
// You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});