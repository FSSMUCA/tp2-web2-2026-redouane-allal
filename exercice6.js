let nom = null, age = 0, ville = "", score = undefined, actif = false;
const variables = { nom, age, ville, score, actif };
const partie = { "??": "Partie A", "||": "\nPartie B", "": "\nPartie C" };
const def = "valeur par défaut";

for (const op of ["??", "||", ""]) {
    console.log(partie[op]);

    for (const cle in variables) {
        const val = variables[cle];

        const resA = val ?? def;
        const resB = val || def;

        if (op) {
            const resultat = (op === "??") ? resA : resB;
            console.log(`${cle.padEnd(5)} ${op} def \t-> ${resultat}`);
        } else {
            const status = resA === resB ? "même résultat" : "résultat différent";
            console.log(`${cle.padEnd(5)} : ?? et || \t-> ${status}`);
        }
    }
}
