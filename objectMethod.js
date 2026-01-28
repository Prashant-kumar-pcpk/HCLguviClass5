// object methods------

// object.keys() .... return the array of keys
let person = {
    name: "venkat",
    age: 45,
    city: "bangalore"
};

let keys = Object.keys(person);

console.log(keys);

// object.values()
// return the  values of array 

let values = Object.values(person);
console.log(values);



// key - value pairs ... Object.entries()
let entries = Object.entries(person);
console.log(entries);

// object. freeze.... makes object completely immutable
let settings = {
    theme: "dark"
};
Object.freeze(settings);

settings.theme = "light";
console.log(settings.theme);