// 3. Name Cases:
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.

let Name: string = "syeda ayesha";

// in UpperCase:

console.log("UpperCase:", Name.toUpperCase());

// in LowerCase:
console.log("LowerCase:", Name.toLowerCase());

//in title case:
let titlecase1 = (Name.charAt(0).toUpperCase());
let titlecase2 = (Name.slice(1 , 12));

let Titlecase = (titlecase1 + titlecase2);
console.log("TitleCase:", Titlecase);


