/* let i = 0; */

let students = [
    "Théo",
    "Louis",
    "Cécile",
    "Chloé",
    "Brandon",
    "Thimotée"
]; 

/* while (i <= 3){
    console.log(students[i]);
    i++;
} */ 

// ou

/* while (i <= students.length){
    console.log(students[i]);
    i++;
} */

// ou
/* 
for (i=0;i<=students.length-1;i++){
    console.log(students[i]);
} */

// ou i <= 3 dans les paramètres de la boucle for
// la boucle for est mieux adaptée pour parcourir les tableaux!

for (let student of students){
    console.log(student);
}

// for of permet de ne pas mettre de compteur, il se fait automatiquement.
