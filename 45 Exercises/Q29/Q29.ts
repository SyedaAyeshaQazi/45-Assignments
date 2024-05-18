// 29. Favorite Fruit:
// Make an array of your favorite fruits, and then write a series of independent if statements that
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement,
// such as You really like bananas!




let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("You really like apples!");
}
// Continue with more fruits