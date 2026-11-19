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


function creatcartactivite(activite) {

    const carte = document.createElement("div");
    carte.className = "w-full bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col gap-4 hover:shadow-md transition";

    // Header
    const header = document.createElement("div");
    header.className = "flex items-center justify-between";

    const theme = document.createElement("span");
    theme.className = "bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium";
    theme.textContent = activite.theme;

    const duree = document.createElement("span");
    duree.className = "text-gray-500 text-sm";
    duree.textContent = activite.duree + " minutes";

    header.append(theme, duree);


    // Informations
    const titre = document.createElement("h3");
    titre.className = "text-xl font-bold text-gray-800";
    titre.textContent = activite.titre;

    const description = document.createElement("p");
    description.className = "text-gray-600 text-sm leading-relaxed";
    description.textContent = activite.description;


    // Objectifs
    const objectifs = document.createElement("div");
    objectifs.className = "bg-gray-50 rounded-lg p-3";

    const titreObjectif = document.createElement("h4");
    titreObjectif.className = "text-sm font-semibold text-gray-800 mb-1";
    titreObjectif.textContent = "Objectifs pédagogiques";

    const texteObjectif = document.createElement("p");
    texteObjectif.className = "text-sm text-gray-600";
    texteObjectif.textContent = activite.objectifs || "Aucun objectif";

    objectifs.append(titreObjectif, texteObjectif);


    // Auteur et ID
    const informations = document.createElement("div");
    informations.className = "flex items-center justify-between border-t pt-3 text-sm text-gray-500";

    const auteur = document.createElement("span");
    auteur.textContent = "Par : " + activite.auteur;

    const id = document.createElement("span");
    id.textContent = "ID : " + activite.id;

    informations.append(auteur, id);


    // Boutons
    const footer = document.createElement("div");
    footer.className = "flex justify-end gap-2";

    const btnModifier = document.createElement("button");
    btnModifier.className = "bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200";
    btnModifier.textContent = "Modifier";

    const btnSupprimer = document.createElement("button");
    btnSupprimer.className = "bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700";
    btnSupprimer.textContent = "Supprimer";

    footer.append(btnModifier, btnSupprimer);


    // Assembler la carte
    carte.append(header, titre, description, objectifs, informations, footer);

    return carte;
}



function afficherActivites(activites) {

    activitiescontainer.replaceChildren();

    activites.forEach(activite => {

        const carte = creatcartactivite(activite);

        activitiescontainer.append(carte);

    });

}

const data = await recupererActivites();

afficherActivites(data)
console.log(data)



