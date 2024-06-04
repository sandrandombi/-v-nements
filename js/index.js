// function cliquerBoutton() {
//     alert('Button clicked')
// }

// const input = document.getElementById("input");

const input = document.getElementById("nouvellesTaches");
const button = document.getElementById("button");
const ul = document.getElementById("list");
const array = [] //



button.addEventListener("click", function () {
  let valeur = input.value;
  if (valeur === "") {
    alert("la valeur est vide and empty");
    input.focus();
  } else {
    const nouvelleLi = document.createElement("li");
    nouvelleLi.textContent = valeur;
    const nouveauBouton = document.createElement("button");
    nouveauBouton.textContent = "supprimer";
    nouvelleLi.appendChild(nouveauBouton);
    nouveauBouton.addEventListener("click", function () {

      nouvelleLi.remove()
      nouveauBouton.remove()
    });

    list.appendChild(nouvelleLi);

    input.value = "";
    input.focus();

    // pour stocker chaque modification dans la liste voir rajout de const array---------------------
    

    let newList = localStorage.getItem("newArray")
    console.log(JSON.parse(newList));
    array.push(valeur);
    console.log(array);
    localStorage.setItem("newArray", JSON.stringify(array));

  }
});

function recupererTaches() {
  let tableau = JSON.parse(localStorage.getItem("array")) || [];
  return tableau;

};
console.log(recupererTaches());

function afficherTache() {
  const tasks = recupererTaches()
  console.log(tasks);
  for (let task of tasks){
    console.log(task)
    let li = document.createElement("li");
    let btn = document.createElement("button")
    btn.textContent = "supprimer";
    li.textContent= task;
    listeTaches.appendChild(li)
  }
  
  }

  function ajouter(){
    let tasks = recupererTaches
    tasks.push(nouvelleTache.value)
    localStorage.setItem("taches",JSON.stringify(tasks))
    afficherTache()
  }

  // function supprimer(task){
  //   let tasks = recupererTaches()
  //   let index = tasks.indexof(task)
  //   tasks.splice(index,1)
  //   localStorage.setItem("taches", tasks)
  // }

