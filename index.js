console.log("hello World")
//  Declare an array

let new_array = ["Vagina",'Milk','Period-Blood','under-arms',"Feet"]
console.log(new_array[3])
new_array[2] = "Anal"
console.log(new_array)

// 3 tourist destination

let destinations = ["India", "Nepal", "Japan"]

destinations.push("Australia");

console.log(destinations)

destinations.push("Canada","England")

console.log(destinations)

destinations.pop()

console.log(destinations)

let vehicles = ["Bike","Car","Scooter"]

console.log(vehicles.includes("Car"))

console.log(vehicles.includes("Aeroplane"))

if (vehicles.includes("Car")){
    console.log("Yes you have a car");
}else{
    console.log("No car At All")
}
if (vehicles.includes("Aeroplane")){
    console.log("Yes you have a car");
}else{
    console.log("No Aeroplane At All")
}

const myName = "Shaikat";

let numbers = [10,20,5, 9, 50];

console.log(Array.isArray(myName));
console.log(Array.isArray(numbers));