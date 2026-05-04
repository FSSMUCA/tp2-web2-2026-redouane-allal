let a = 0, b = "", c = "0", d = false, e = null, f = undefined, g = NaN, h = 1, i = "1", j = " \t\n ";
let paires = [[a, b], [a, c], [a, d], [b, d], [e, f], [e, d], [g, g], [h, i], [j, a]];
let X = 0;
for (let I = 0; I < paires.length; I++) {
    const elem1 = paires[I][0], elem2 = paires[I][1];
    const txt1 = Number.isNaN(elem1) ? String(elem1) : JSON.stringify(elem1);
    const txt2 = Number.isNaN(elem2) ? String(elem2) : JSON.stringify(elem2);
    const egalSimple = elem1 == elem2, egalStricte = elem1 === elem2;
    if (egalSimple !== egalStricte) X++;
    const col1 = `${txt1} == ${txt2}`.padEnd(20);
    const col2 = `${txt1} === ${txt2}`.padEnd(20);
    console.log(`${col1} -> ${String(egalSimple).padEnd(8)}|   ${col2} -> ${egalStricte}`);
}
console.log("---");
console.log(`${X} paire(s) où == et === donnent des résultats différents`);