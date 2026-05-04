let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    const element = valeurs[i];
    const truthiness = element ? "truthy" : "falsy";
    if (element === "") {
        console.log("(chaine vide) -> " + truthiness);
        continue;
    }
    console.log(String(element) + " -> " + truthiness);
}