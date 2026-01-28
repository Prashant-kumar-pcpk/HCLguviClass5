// object is the collection of related data and functionlity, stored key - value pairs.


// stored key - value pair
// key -> propety name
// value - > data(string, number,array, function)


// without object

   let name = "rama";
   let age = 21;
   let course = "react";


let student = {
    name: "rama",
    age: 21,
    course: "react"
}

// accessing the object values
console. log( student. name) ;
console. log(student. age);


// bracket notation as well
console. log(student["name"]);

// object with function (method)
let mobile = {
    brand : " iPhon " ,
    model : "iphone pro max 17",

    market: function() {
      console. log("now in market")
    }
};
mobile.market ( ) ;


let product = {
    id: 1,
    name: "laptop",
    price: 50000,
    discount: 5000,
    finalPrice: function() {
       return this.price - this.discount
    }
};

console.log(product.finalPrice());



// accessing object properties
   let person = {
      name: "venkat",
      age: 45,
      city: "bangalore"
};

console.log(person.name);