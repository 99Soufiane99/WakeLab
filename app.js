// import axios from "./node_modules/axios/dist/esm/axios.js";

// const nompopup = document.getElementById("nom-popup")
// const popupDiv = document.getElementById("popup-div")
// const btnAddActivite = document.getElementById("btn-add")
// const modifierNom = document.getElementById("btn-name")
// const activiteContainer = document.getElementById("activities-container");
// const activiteCont = document.getElementById("activities-count");
// const popupActivite = document.getElementById("popup-activity");
// const response = await axios.get("http://localhost:3000/api/activites")






// const btnAjoutNom = document.getElementById("ajouter-nom")
// const data = response.data
// popupActivite.classList.add("hidden")

// activiteCont.innerHTML = `${data.length} activite`;

// btnAddActivite.addEventListener("click", () => {
//     console.log("test")
//     popupActivite.classList.remove("hidden")
// })



// function afichieractiviter() {


//     activiteContainer.replaceChildren();

    
//     const message = document.getElementById("message");
//     message.textContent = "";
//     message.classList.add("hidden");

//     data.forEach(d => {

//         const carte = document.createElement("div");
//         carte.className = "bg-white rounded-xl shadow p-5 border";

//         const informations = document.createElement("div");
//         informations.className = "flex items-center justify-between mb-3";

//         const theme = document.createElement("span");
//         theme.className = "bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm";
//         theme.textContent = d.theme;

//         const duree = document.createElement("span");
//         duree.className = "text-gray-500 text-sm";
//         duree.textContent = d.duree + " minutes";

//         informations.append(theme, duree);

  
//         const titre = document.createElement("h3");
//         titre.className = "text-xl font-bold mb-2";
//         titre.textContent = d.titre;

//         const description = document.createElement("p");
//         description.className = "text-gray-600 mb-3";
//         description.textContent = d.description;

//         const objectifs = document.createElement("p");
//         objectifs.className = "text-sm text-gray-500 mb-4";
//         objectifs.textContent = "Objectif : " + (d.objectifs || "Aucun");

//         const footer = document.createElement("div");
//         footer.className = "border-t pt-3 flex justify-between items-center";

//         const auteur = document.createElement("span");
//         auteur.className = "text-sm text-gray-500";
//         auteur.textContent = d.auteur;

//         const boutons = document.createElement("div");
//         boutons.className = "flex gap-2";

//         const btnModifier = document.createElement("button");
//         btnModifier.className = "bg-gray-100 text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-300";
//         btnModifier.textContent = "Modifier";

//         const btnSupprimer = document.createElement("button");
//         btnSupprimer.className = "bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-800";
//         btnSupprimer.textContent = "Supprimer";

//         boutons.append(btnModifier, btnSupprimer);

//         footer.append(auteur, boutons);


//         carte.append(informations, titre, description, objectifs, footer);
//         activiteContainer.append(carte);

//     });

//     if (data.length === 0) {
//         message.textContent = "Aucune activité pour le moment.";
//         message.classList.remove("hidden");
//     }
// }


// // function afichieractiviter() {

// //     activiteContainer.innerHTML = ``
// //     document.getElementById("message").textContent = ``
// //     data.forEach(d => {
// //         activiteContainer.innerHTML += `
// //      <div class="bg-white rounded-xl shadow p-5 border">

// //     <div class="flex items-center justify-between mb-3">
// //         <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
// //             ${d.theme}
// //         </span>

// //         <span class="text-gray-500 text-sm">${d.duree} minute</span>
// //     </div>

// //     <h3 class="text-xl font-bold mb-2">
// //         ${d.titre}
// //     </h3>

// //     <p class="text-gray-600 mb-3">
// //         ${d.description}
// //     </p>

// //     <p class="text-sm text-gray-500 mb-4">
// //         Objectif : ${d.objectifs}
// //     </p>

// //     <div class="border-t pt-3 flex justify-between items-center">
// //         <span class="text-sm text-gray-500">
// //             ${d.auteur}
// //         </span>

// //         <div class="bt-click flex gap-2">
// //             <button class="bg-white-600 text-gray px-3 py-2 rounded-lg hover:bg-gray-300">
// //                 Modifier
// //             </button>

// //             <button class="bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-800">
// //                 Supprimer
// //             </button>
// //         </div>
// //     </div>

// // </div>

// //     `

// //     })
// // }
// function ajouterusername() {
//     btnAjoutNom.addEventListener("click", () => {
//         document.getElementById("user-name").textContent = nompopup.value
//         popupDiv.classList.add("hidden")
//     })
//     document.getElementById("close-popup").addEventListener("click", () => {
//         popupDiv.classList.add("hidden")
//     })
// }

// function modifiernom() {
//     modifierNom.addEventListener("click", () => {
//         popupDiv.classList.remove("hidden")
//     })
// }



// modifiernom()
// afichieractiviter()
// ajouterusername()


import axios from "./node_modules/axios/dist/esm/axios.js";

const activitiescontainer = document.getElementById("activities-container")

async function recupererActivites() {
    const response = await axios.get("http://localhost:3000/api/activites");

    return response.data;
}

function creerCarte(activite) {

    const carte = document.createElement("div");
    carte.className = "bg-white rounded-xl shadow p-5 border";

    const titre = document.createElement("h3");
    titre.textContent = activite.titre;

    const description = document.createElement("p");
    description.textContent = activite.description;

    carte.append(titre, description);

    return carte;
}

const data = await recupererActivites();

console.log(data);




