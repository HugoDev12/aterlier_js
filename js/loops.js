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

/* for (let student of students){
    console.log(student);
} */

// la boucle for of n'a pas besoin de compteur, elle le fait automatiquement.

for (let index in students){
    //console.log(index);
    // ou
    console.log("Etudiant numéro : " + (parseInt(index) + 1) + " : " + students[index]); // va chercher les valeurs
}                                      // ou Number(ind..)

// va chercher l'index (les clés) aulieu de la valeur dans le tableau.
// for in est plus intéressante/plus puissante.

let human = {
    "name" : "Henry",
    "age" : 45,
    "sexe" : "male",
    "country" : "France"
}; // pour un tableau associatif, toujours utilisé la boucle for in !!!!!!

for (let key in human){
    console.log(key + " : " + human[key]); // pour afficher les clés (key) et ses valeurs (humzn[key])
}
