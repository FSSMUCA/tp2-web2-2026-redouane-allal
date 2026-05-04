let a = 42, b = "Bonjour", c = true, d = null, e, f = [1, 2, 3], g = { nom: "Ali" }, h = NaN;

console.log(String(a) + " -> " + typeof a);
console.log(String(b) + " -> " + typeof b);
console.log(String(c) + " -> " + typeof c);
console.log(String(d) + " -> " + typeof d);
console.log(String(e) + " -> " + typeof e);
console.log(JSON.stringify(f) + " -> " + typeof f);
console.log(String(g) + " -> " + typeof g);
console.log(String(h) + " -> " + typeof h);
