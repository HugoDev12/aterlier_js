// exo 4

let player = {
    "firstname" : "John",
    "lastname" : "Doe",
    "age" : 40,
    "isAdult" : true
}

console.log(player);
console.log(player["lastname"]);
console.log(player.firstname + " " + player.lastname);
console.log(player.age);

if (player.age >= 18) {
    console.log(player.isAdult)
}
else {
    console.log("false")
};

// exo 5 

let car = {
    "type" : "Clio",
    "brand" : "Renault",
    "date" : 2006,
    "color" : "orange",
    "passengers" : ["Mike","Claire","Anna","Louis"]
}

console.log(car);
console.log("Une " + car.type + " de couleur noir, modèle " + car.date + " a été aperçue avec à son bord " + car["passengers"].length + " passagers.");
console.log(car["passengers"][0]);
console.log(car["passengers"].length + " individus ont été aperçus à son bord : " + car["passengers"][3] + ", " + car["passengers"][1] + ", " + car["passengers"][0] + ", " + car["passengers"][2]);


//exo 6

let a = 14;
let b = 38;
let product = [];
console.log(a,b,product);
product.unshift(a,b);
product[7] = 50;
console.log(product);

