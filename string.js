const country = "Bangladesh";
const division = 'Chattogram';
const district = `Chattogram`;
const thana = new String('Rangunia');

console.log(typeof(country))
console.log(typeof(division))
console.log(typeof(district))
console.log(typeof(thana))
console.log(thana)

country[4] = 'p';
// This shit doesn't change because string is immutable
console.log(country)

