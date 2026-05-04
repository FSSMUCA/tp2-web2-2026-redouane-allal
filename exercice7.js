let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

const sousTotal = prix * quantite;
console.log("Sous-Totale :", sousTotal.toFixed(2), "MAD");

const reduction = ((codePromo ?? false) && estMembre) * sousTotal * reductionPourcentage / 100;
console.log(`Montant de la réduction : ${reduction.toFixed(2)} MAD`);

const total = sousTotal - reduction;
console.log(`Total final : ${total.toFixed(2)} MAD`);

let statut;
let paiementAccepte = soldeCompte >= total;
if (paiementAccepte) {
    statut = "Paiement accepté";
} else statut = "Solde insuffisant";
console.log(statut);

if (paiementAccepte) {
    soldeCompte -= total;
    console.log("Nouveau solde : " + soldeCompte + " MAD");
}

console.log(
`\n===== RÉCAPITULATIF =====
Produit   : ${nomProduit}
Quantité  : ${quantite}
Prix unit.: ${prix} MAD
Sous-total: ${sousTotal.toFixed(2)} MAD
Réduction : ${reduction.toFixed(2)} MAD
Total     : ${total.toFixed(2)} MAD
Statut    : ${statut}
Solde     : ${soldeCompte} MAD
=========================`);