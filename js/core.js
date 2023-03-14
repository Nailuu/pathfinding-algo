var cpt = 1;
var error = ["8543", "8533", "8542", "8531", "8532", "8530", "8529", "8547", "8550", "8551", "8552", "8553", "8557", "8558", "8559", "8560", "8561", "8562", "8563", "8565", "8580", "9300", "9320", "9324"];

function lire(param_msg = "") {
    do {
        result = prompt(param_msg);
    } while (result === null);
    return result;
}

function afficherMoment() {
    let today = new Date();
    let time = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + String(today.getHours()).padStart(2, 0) + ":" + String(today.getMinutes()).padStart(2, 0) + ":" + String(today.getSeconds()).padStart(2, 0);
    div = document.createElement("div");
    div.classList.add("blockquote-footer", "mt-3", "mb-1", "afficher");
    div.id = "afficher-" + cpt;
    div.innerHTML = "<small><strong>#" + (cpt) + " " + " @" + title + "</strong> <em>" + time + "</em></small>";
    document.getElementById("content").appendChild(div);
    location.href = "#afficher-" + (cpt++);
}

function afficher(...param_str) {
    afficherMoment();
    parent = document.getElementById("content");
    container = document.createElement("div");
    param_str.forEach(function(item) {
        displayContent(item, parent, container);
    });
}

function displayContent(content, parent, container, reverse = false) {
    switch (true) {
        case (typeof(content) == "undefined"):
            container.innerHTML += displayError("Attention, la variable n'existe pas...");
            parent.appendChild(container);
            break;
        case (typeof(content) == "boolean"):
            container.innerHTML += content ? "VRAI" : "FAUX";
            parent.appendChild(container);
            break;
        case (typeof(content) == "string" || typeof(content) == "number"):
            container.innerHTML += "" + content;
            parent.appendChild(container);
            break;
        case (Array.isArray(content)):
            displayTable(content, parent, container, reverse);
            break;
        default:
            displayObject(content, parent);
            break;
    }
}

function displayTable(content, parent, container, reverse = false) {
    if (Array.isArray(content)) {
        let tableau, ligne, colonne;
        tableau = document.createElement("table");
        tableau.classList.add("table", "table-bordered");
        if (!reverse) {
            ligne = tableau.insertRow();
        }
        for (let j = 0; j < content.length; j++) {
            if (reverse) {
                ligne = tableau.insertRow();
            }
            colonne = ligne.insertCell();
            colonne.classList.add("text-center");
            if (Array.isArray(content[j])) {
                displayContent(content[j], colonne, container, !reverse);
            } else if (typeof(content[j]) == "object") {
                displayObject(content[j], colonne, container, !reverse);
            } else {
                colonne.innerHTML += "<span>" + (typeof(content[j]) == "undefined" ? displayError("Attention, la variable n'existe pas...") : content[j]) + "</span>";
            }
        }
        parent.appendChild(tableau);
    }
}

function displayError(msg = "Attention, il y a visiblement une erreur...") {
    console.error(msg);
    document.title = "!!! Oops !!!";
    return "<span class='text-danger'>&#12" + error[aleatoire(error.length - 1)] + "; Oops !</span>";
}

function displayObject(content, parent, container, reverse = false) {
    let tableau, ligne, colonne;
    tableau = document.createElement("table");
    tableau.classList.add("table", "table-bordered");
    if (!reverse) {
        ligne = tableau.insertRow();
    }
    for (var key in content) {
        if (reverse) {
            ligne = tableau.insertRow();
        }
        colonne = ligne.insertCell();
        colonne.classList.add("text-center");
        colonne.innerHTML = "<span class='key'>" + key + ":</span>";
        if (Array.isArray(content[key])) {
            displayContent(content[key], colonne, container, !reverse);
        } else if (typeof(content[key]) == "object") {
            displayObject(content[key], colonne, container, !reverse);
        } else {
            colonne.innerHTML += "<span>" + (typeof(content[key]) == "undefined" ? displayError("Attention, la variable n'existe pas...") : content[key]) + "</span>";
        }
    }
    parent.appendChild(tableau);
}

function taille(element) {
    result = false;
    if (Array.isArray(element) || typeof(element == "string")) {
        result = element.length;
    }
    return result;
}

function aleatoire(param_max = 100, param_min = 0) {
    max = param_max;
    min = param_min;
    if (param_min > param_max) {
        max = param_min;
        min = param_max;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
href = location.href.split("/");
if (href.length > 2) {
    title = decodeURIComponent(href[href.length - 2]);
    document.title = title;
}