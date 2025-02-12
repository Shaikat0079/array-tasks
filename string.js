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


// object

const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false
}

const subject = {
    sName: 'Biology',
    teaacher: 'Saheda',
    exam: '30 Feb'
}

const person = {
    pName: 'Shaikat Barua',
    age: 27,
    profession: 'Developer',
    salary: 100000,
    marrid: false
}

console.log(person)
console.log(person.pName)

const income = person.salary;

console.log(person['age']);

const keyName = person.profession;
console.log(keyName)
const work = "profession";
console.log(person[work])

const computer = {
    bName: "Lenovo",
    CPU: "i7th - 12Gen",
    GPU: "Nvidia RTX 3050Ti",
    RAM: 16,
    SSD: 512
}

// const keys = Object.keys(computer)
// const values = Object.values(computer)
// console.log(keys)
// console.log(values)

const mobile = {
    brand: "Samsung",
    price: 25000,
    color: 'Black',
    camera: '12MP',
    isNew: true
}

for (const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}

const keys = Object.keys(mobile)
console.log(keys)

for(const key of keys){
    console.log(key+":"+mobile[key])
}