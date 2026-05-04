let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (const x of nombres) {
    let message;
    if (Number.isNaN(x)) message = "INVALIDE";
    else if (!Number.isFinite(x)) message = "INFINI";
    else if (1 / x === -Infinity) message = "ZERO NEGATIF";
    else if (Number.isInteger(x)) {
        message = "ENTIER SUR";
        if (!Number.isSafeInteger(x)) message = "ENTIER HORS LIMITES";
    }
    else message = "DECIMAL";

    console.log(`${String(x)} -> ${message}`);
}