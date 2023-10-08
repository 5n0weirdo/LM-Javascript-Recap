// Falsy 
// undefined
// null
//  0
//  false
//  ''
// NaN

// false || true - returns true
// false || "LM" - returns "LM"
// false || 1 - returns 1
// false || 1 || 2 - returns 1 (it's called short-circuiting)

// Short-circuiting

// Anything that is not Falsy is Truthy



let userColor = null;
let defaultColor = "yellow";
let currentColor = userColor || defaultColor;

console.log(currentColor)