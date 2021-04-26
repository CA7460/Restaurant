/*Les données:  Entree */

var tabEntree = [{"nom": "Salade de mais a la mexicaine", "prix": 4.35, "photo": "assets/images/entree/salade_de_mais.jpg"},
    {"nom": "Potage de champignons", "prix": 6.50, "photo": "assets/images/entree/soup_de_champignon.jpeg"},
    {"nom": "Rouleaux imperiaux", "prix": 10.45, "photo": "assets/images/entree/rouleaux_imperiaux.png"}
];

/*Les données:  Repas */

var tabRepas = [{"nom": "Pizza italienne", "prix": 9.45, "photo": "assets/images/repas/pizza_italienne.jpg"},
    {"nom": "Riz au poulet et légumes", "prix": 12.50, "photo": "assets/images/repas/poulet_riz_epice.jpeg"},
    {"nom": "Casserole de morue à la provençale", "prix": 10.45, "photo": "assets/images/repas/сasserole_morue.jpg"}
];

var prixRepas = 0;
var prixEntree = 0;
const GST_QST_tax = (0.05 + 0.09975);

/* function afficherMenu();*/

function remplirSelRepas() {
    var selRepas = document.querySelector('#selRepas');  //document.getElementByID('selRepas');
    selRepas.options[selRepas.options.length] = new Option("Votre choix");

    for (unRepas of tabRepas) {
        selRepas.options[selRepas.options.length] = new Option(unRepas.nom);
    }
}

function infosRepasChoisi(selRepas) {
    var posRepasChoisi = selRepas.selectedIndex - 1;
    var repasChoisi = tabRepas[posRepasChoisi];
    document.getElementById('prixRepas').innerHTML = "<b>" + repasChoisi.prix + "$</b>";
    document.getElementById('photoRepas').src = repasChoisi.photo;
    document.getElementById('photoRepas').style.display = 'block';
    prixRepas = repasChoisi.prix;
    calculerPrix();
}

function remplirSelEntree() {
    var selEntree = document.querySelector('#selEntree'); //document.getElementByID('selEntree');
    selEntree.options[selEntree.options.length] = new Option("Votre choix");

    for (unEntree of tabEntree) {
        selEntree.options[selEntree.options.length] = new Option(unEntree.nom);
    }
}

function infosEntreeChoisi(selEntree) {
    var posEntreeChoisi = selEntree.selectedIndex - 1;
    var entreeChoisi = tabEntree[posEntreeChoisi];
    document.getElementById('prixEntree').innerHTML = "<b>" + entreeChoisi.prix + "$</b>";
    document.getElementById('photoEntree').src = entreeChoisi.photo;
    document.getElementById('photoEntree').style.display = 'block';
    prixEntree = entreeChoisi.prix;
    calculerPrix();
}

function calculerPrix()
{
    document.getElementById('sousTotal').innerHTML = arrondir(prixEntree + prixRepas) + "$";
    document.getElementById('taxe').innerHTML = arrondir((prixEntree + prixRepas) * GST_QST_tax)  + "$";
    document.getElementById('total').innerHTML = "<b>" + arrondir((prixEntree + prixRepas) + ((prixEntree + prixRepas) * GST_QST_tax)) +  "$</b>";
}

function arrondir(nombre)
{
    return Math.round(nombre * 100) / 100;
}

function afficherMenu()
{
    remplirSelRepas();
    remplirSelEntree();
    infosRepasChoisi(selRepas);
    infosEntreeChoisi(selEntree);
}
