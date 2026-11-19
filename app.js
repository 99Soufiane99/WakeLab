import axios from "./node_modules/axios/dist/esm/axios.js";

const activitiescontainer = document.getElementById("activities-container");
const activitiesCount = document.getElementById("activities-count");
const message = document.getElementById("message");
const userName = document.getElementById("user-name");
const userNamePopup = document.getElementById("popup-div");
const userNameInput = document.getElementById("nom-popup");
const btnAddUserName = document.getElementById("ajouter-nom");


async function recupererActivites() {
    const response = await axios.get("http://localhost:3000/api/activites");

    return response.data;
}


function creatcartactivite(activite) {

    const carte = document.createElement("div");
    carte.className = "w-full bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col gap-4 hover:shadow-md transition";

    const header = document.createElement("div");
    header.className = "flex items-center justify-between";

    const theme = document.createElement("span");
    theme.className = "bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium";
    theme.textContent = activite.theme;

    const duree = document.createElement("span");
    duree.className = "text-gray-500 text-sm";
    duree.textContent = activite.duree + " minutes";

    header.append(theme, duree);


    const titre = document.createElement("h3");
    titre.className = "text-xl font-bold text-gray-800";
    titre.textContent = activite.titre;

    const description = document.createElement("p");
    description.className = "text-gray-600 text-sm leading-relaxed";
    description.textContent = activite.description;

    const objectifs = document.createElement("div");
    objectifs.className = "bg-gray-50 rounded-lg p-3";

    const titreObjectif = document.createElement("h4");
    titreObjectif.className = "text-sm font-semibold text-gray-800 mb-1";
    titreObjectif.textContent = "Objectifs pédagogiques";

    const texteObjectif = document.createElement("p");
    texteObjectif.className = "text-sm text-gray-600";
    texteObjectif.textContent = activite.objectifs || "Aucun objectif";

    objectifs.append(titreObjectif, texteObjectif);

    const informations = document.createElement("div");
    informations.className = "flex items-center justify-between border-t pt-3 text-sm text-gray-500";

    const auteur = document.createElement("span");
    auteur.textContent = "Par : " + activite.auteur;

    informations.append(auteur);


    const footer = document.createElement("div");
    footer.className = "flex justify-end gap-2";

    const btnModifier = document.createElement("button");
    btnModifier.className = "bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200";
    btnModifier.textContent = "Modifier";

    const btnSupprimer = document.createElement("button");
    btnSupprimer.className = "bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700";
    btnSupprimer.textContent = "Supprimer";

    footer.append(btnModifier, btnSupprimer);

    carte.append(header, titre, description, objectifs, informations, footer);

    return carte;
}



function afficherActivites(activites) {

    activitiescontainer.replaceChildren();
    activitiesCount.textContent = activites.length + " activite"
    if(activites.length=== 0){
        message.classList.remove("hidden")
        return
    }
    message.classList.add("hidden");
    activites.forEach(activite => {

        const carte = creatcartactivite(activite);

        activitiescontainer.append(carte);

    });

}

function ajouterNomUtilisateur() {

    let nom = localStorage.getItem("nomUtilisateur");

    if (nom) {
    userName.textContent = nom;
    userNamePopup.classList.add("hidden");
} else {
    userNamePopup.classList.remove("hidden");
}
    if (nom) {
        userName.textContent = nom;
    } else {
        userNamePopup.classList.remove("hidden");
    }

    btnAddUserName.addEventListener("click", () => {

        let nom = userNameInput.value;

        localStorage.setItem("nomUtilisateur", nom);

        userName.textContent = nom;

        userNamePopup.classList.add("hidden");

    });

    userName.addEventListener("click", () => {
        userNamePopup.classList.remove("hidden");
    });

}

btnAddUserName.addEventListener("click", ajouterNomUtilisateur);
const data = await recupererActivites();

document.getElementById("close-popup").addEventListener("click", () => {
        userNamePopup.classList.add("hidden");
    });
afficherActivites(data)
ajouterNomUtilisateur();




